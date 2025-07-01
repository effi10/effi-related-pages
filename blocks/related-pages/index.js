import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
    useBlockProps,
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    RangeControl,
    __experimentalNumberControl as NumberControl, // Utilise le NumberControl moderne
    RadioControl,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';

// Fallback pour les anciennes versions de WP
const EffiNumberControl = NumberControl || RangeControl;


registerBlockType(metadata.name, {
    edit: ({ attributes, setAttributes }) => {
        const {
            relationType,
            postCount,
            displayAs,
            gridColumns,
            showImage,
            imageSize,
            imageRatio,
            imageCrop,
            titleTag,
            showExcerpt,
            excerptLength,
        } = attributes;

        const blockProps = useBlockProps();

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Requête', 'effi-related-pages')}>
                        <SelectControl
                            label={__('Type de relation', 'effi-related-pages')}
                            value={relationType}
                            options={[
                                { label: __('Pages enfants', 'effi-related-pages'), value: 'children' },
                                { label: __('Pages sœurs', 'effi-related-pages'), value: 'sisters' },
                            ]}
                            onChange={(value) => setAttributes({ relationType: value })}
                        />
                        <EffiNumberControl
                            label={__('Nombre d’éléments à afficher', 'effi-related-pages')}
                            help={__('0 pour afficher tous les éléments.', 'effi-related-pages')}
                            value={postCount}
                            onChange={(value) => setAttributes({ postCount: parseInt(value, 10) })}
                            min={0}
                        />
                    </PanelBody>

                    <PanelBody title={__('Affichage', 'effi-related-pages')} initialOpen={false}>
                        <RadioControl
                            label={__('Format d\'affichage', 'effi-related-pages')}
                            selected={displayAs}
                            options={[
                                { label: __('Liste', 'effi-related-pages'), value: 'list' },
                                { label: __('Grille', 'effi-related-pages'), value: 'grid' },
                            ]}
                            onChange={(value) => setAttributes({ displayAs: value })}
                        />
                        {displayAs === 'grid' && (
                            <RangeControl
                                label={__('Nombre de colonnes', 'effi-related-pages')}
                                value={gridColumns}
                                onChange={(value) => setAttributes({ gridColumns: value })}
                                min={1}
                                max={4}
                            />
                        )}
                    </PanelBody>

                    <PanelBody title={__('Image à la une', 'effi-related-pages')} initialOpen={false}>
                        <ToggleControl
                            label={__('Afficher l’image à la une', 'effi-related-pages')}
                            checked={showImage}
                            onChange={(isChecked) => setAttributes({ showImage: isChecked })}
                        />
                        {showImage && (
                            <>
                                <SelectControl
                                    label={__('Taille de l’image', 'effi-related-pages')}
                                    value={imageSize}
                                    options={[
                                        { label: 'Thumbnail', value: 'thumbnail' },
                                        { label: 'Medium', value: 'medium' },
                                        { label: 'Large', value: 'large' },
                                        { label: 'Full', value: 'full' },
                                    ]}
                                    onChange={(value) => setAttributes({ imageSize: value })}
                                />
                                <SelectControl
                                    label={__('Ratio de l’image', 'effi-related-pages')}
                                    value={imageRatio}
                                    options={[
                                        { label: '1:1', value: '1:1' },
                                        { label: '16:9', value: '16:9' },
                                        { label: '4:3', value: '4:3' },
                                    ]}
                                    onChange={(value) => setAttributes({ imageRatio: value })}
                                />
                                 <ToggleControl
                                    label={__('Recadrer l\'image', 'effi-related-pages')}
                                    help={__('Assure que l\'image remplit le conteneur en la coupant si besoin.', 'effi-related-pages')}
                                    checked={imageCrop}
                                    onChange={(isChecked) => setAttributes({ imageCrop: isChecked })}
                                />
                            </>
                        )}
                    </PanelBody>

                    <PanelBody title={__('Contenu', 'effi-related-pages')} initialOpen={false}>
                        <SelectControl
                            label={__('Balise HTML du titre', 'effi-related-pages')}
                            value={titleTag}
                            options={[
                                { label: 'SPAN', value: 'span' },
                                { label: 'H2', value: 'h2' },
                                { label: 'H3', value: 'h3' },
                                { label: 'H4', value: 'h4' },
                                { label: 'H5', value: 'h5' },
                                { label: 'H6', value: 'h6' },
                            ]}
                            onChange={(value) => setAttributes({ titleTag: value })}
                        />
                        <ToggleControl
                            label={__('Afficher l’extrait', 'effi-related-pages')}
                            checked={showExcerpt}
                            onChange={(isChecked) => setAttributes({ showExcerpt: isChecked })}
                        />
                        {showExcerpt && (
                            <EffiNumberControl
                                label={__('Nombre de mots max pour l’extrait', 'effi-related-pages')}
                                value={excerptLength}
                                onChange={(value) => setAttributes({ excerptLength: parseInt(value, 10) })}
                                min={5}
                                max={100}
                            />
                        )}
                    </PanelBody>

                </InspectorControls>

                <div {...blockProps}>
                    <ServerSideRender
                        block={metadata.name}
                        attributes={attributes}
                    />
                </div>
            </>
        );
    },
    // Le save est géré par PHP, donc on retourne null
    save: () => null,
});