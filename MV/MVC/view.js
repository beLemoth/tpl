var View = {
    render: function(templateName, model) {
        templateName = templateName + 'Template';

        var templateElement = document.getElementById(templateName),
            templateSource = templateElement.innerHTML,
            renderFn = Handlebars.compile(templateSource);

        return renderFn(model);
    },
    addBlock: function(parent, content, blockClass) {
        let block = document.createElement('div');

        if(blockClass) block.className = blockClass;
        block.innerHTML = content || 'Something wrong';

        return parent.appendChild(block);
    }
};
