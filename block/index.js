(function (blocks, blockEditor, i18n, element, components, serverSideRender) {
    var __ = i18n.__;
    var createElement = element.createElement;
    var useBlockProps = blockEditor.useBlockProps;
    var InspectorControls = blockEditor.InspectorControls;
    var PanelBody = components.PanelBody;
    var SelectControl = components.SelectControl;
    var RangeControl = components.RangeControl;
    var ToggleControl = components.ToggleControl;
    var RadioControl = components.RadioControl;
    var ServerSideRender = serverSideRender || components.ServerSideRender;

    blocks.registerBlockType('effi-related-pages/related-pages', {
        edit: function (props) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;
            var blockProps = useBlockProps();

            return createElement(
                'div',
                blockProps,
                createElement(
                    InspectorControls,
                    null,
                    createElement(
                        PanelBody,
                        { title: __('Content Settings', 'effi-related-pages'), initialOpen: true },
                        createElement(SelectControl, {
                            label: __('Relation Type', 'effi-related-pages'),
                            value: attributes.relationType,
                            options: [
                                { label: __('Child pages', 'effi-related-pages'), value: 'children' },
                                { label: __('Sibling pages', 'effi-related-pages'), value: 'siblings' },
                            ],
                            onChange: function (value) { setAttributes({ relationType: value }); },
                        }),
                        createElement(RangeControl, {
                            label: __('Number of items', 'effi-related-pages'),
                            value: attributes.postsToShow,
                            onChange: function (value) { setAttributes({ postsToShow: value }); },
                            min: 0,
                            max: 20,
                            help: __('0 displays all available items.', 'effi-related-pages'),
                        })
                    ),
                    // --- AJOUT DU PANNEAU DE TRI ---
                    createElement(
                        PanelBody,
                        { title: __('Sorting Options', 'effi-related-pages'), initialOpen: false },
                        createElement(SelectControl, {
                            label: __('Order by', 'effi-related-pages'),
                            value: attributes.orderBy,
                            options: [
                                { label: __('Title', 'effi-related-pages'), value: 'title' },
                                { label: __('Publication Date', 'effi-related-pages'), value: 'date' },
                                { label: __('ID', 'effi-related-pages'), value: 'ID' },
                            ],
                            onChange: function (value) { setAttributes({ orderBy: value }); },
                        }),
                        createElement(SelectControl, {
                            label: __('Direction', 'effi-related-pages'),
                            value: attributes.order,
                            options: [
                                { label: __('Ascending', 'effi-related-pages'), value: 'ASC' },
                                { label: __('Descending', 'effi-related-pages'), value: 'DESC' },
                            ],
                            onChange: function (value) { setAttributes({ order: value }); },
                        })
                    ),
                    // --- FIN DE L'AJOUT ---
                    createElement(
                        PanelBody,
                        { title: __('Layout Settings', 'effi-related-pages'), initialOpen: false },
                        createElement(RadioControl, {
                            label: __('Display as', 'effi-related-pages'),
                            selected: attributes.displayLayout,
                            options: [
                                { label: __('List', 'effi-related-pages'), value: 'list' },
                                { label: __('Grid', 'effi-related-pages'), value: 'grid' },
                            ],
                            onChange: function (value) { setAttributes({ displayLayout: value }); },
                        }),
                        attributes.displayLayout === 'grid' && createElement(RangeControl, {
                            label: __('Columns', 'effi-related-pages'),
                            value: attributes.columns,
                            onChange: function (value) { setAttributes({ columns: value }); },
                            min: 1,
                            max: 4,
                        })
                    ),
                    createElement(
                        PanelBody,
                        { title: __('Image Settings', 'effi-related-pages'), initialOpen: false },
                        createElement(ToggleControl, {
                            label: __('Display featured image', 'effi-related-pages'),
                            checked: attributes.displayFeaturedImage,
                            onChange: function (value) { setAttributes({ displayFeaturedImage: value }); },
                        }),
                        attributes.displayFeaturedImage && createElement(
                            element.Fragment,
                            null,
                            createElement(SelectControl, {
                                label: __('Image Size', 'effi-related-pages'),
                                value: attributes.imageSize,
                                options: [
                                    { label: 'Thumbnail', value: 'thumbnail' },
                                    { label: 'Medium', value: 'medium' },
                                    { label: 'Large', value: 'large' },
                                    { label: 'Full', value: 'full' },
                                ],
                                onChange: function (value) { setAttributes({ imageSize: value }); },
                            }),
                            createElement(SelectControl, {
                                label: __('Image Ratio', 'effi-related-pages'),
                                value: attributes.imageRatio,
                                options: [
                                    { label: '1:1', value: '1:1' },
                                    { label: '16:9', value: '16:9' },
                                    { label: '4:3', value: '4:3' },
                                ],
                                onChange: function (value) { setAttributes({ imageRatio: value }); },
                            }),
                            createElement(ToggleControl, {
                                label: __('Crop image', 'effi-related-pages'),
                                checked: attributes.imageCrop,
                                onChange: function (value) { setAttributes({ imageCrop: value }); },
                            }),
                            createElement(SelectControl, {
                                label: __('Image Position', 'effi-related-pages'),
                                value: attributes.imagePosition,
                                options: [
                                    { label: 'Top', value: 'top' },
                                    { label: 'Bottom', value: 'bottom' },
                                    { label: 'Left', value: 'left' },
                                    { label: 'Right', value: 'right' },
                                ],
                                onChange: function (value) { setAttributes({ imagePosition: value }); },
                            })
                        )
                    ),
                     createElement(
                        PanelBody,
                        { title: __('Text Settings', 'effi-related-pages'), initialOpen: false },
                        createElement(SelectControl, {
                            label: __('Title HTML Tag', 'effi-related-pages'),
                            value: attributes.titleTag,
                            options: [
                                { label: 'SPAN', value: 'span' },
                                { label: 'H2', value: 'h2' },
                                { label: 'H3', value: 'h3' },
                                { label: 'H4', value: 'h4' },
                                { label: 'H5', value: 'h5' },
                                { label: 'H6', value: 'h6' },
                            ],
                            onChange: function (value) { setAttributes({ titleTag: value }); },
                        }),
                        createElement(ToggleControl, {
                            label: __('Display excerpt', 'effi-related-pages'),
                            checked: attributes.displayExcerpt,
                            onChange: function (value) { setAttributes({ displayExcerpt: value }); },
                        }),
                        attributes.displayExcerpt && createElement(RangeControl, {
                            label: __('Max excerpt length (words)', 'effi-related-pages'),
                            value: attributes.excerptLength,
                            onChange: function (value) { setAttributes({ excerptLength: value }); },
                            min: 5,
                            max: 100,
                        })
                    )
                ),
                createElement(ServerSideRender, {
                    block: 'effi-related-pages/related-pages',
                    attributes: attributes,
                })
            );
        },
        save: function () {
            return null;
        },
    });
})(
    window.wp.blocks,
    window.wp.blockEditor,
    window.wp.i18n,
    window.wp.element,
    window.wp.components,
    window.wp.serverSideRender
);