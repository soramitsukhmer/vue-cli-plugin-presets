module.exports = api => {
    // Install additional dependencies
    api.extendPackage({
        scripts: {
            'bump:release': 'yarn version',
            'prebump:release': 'yarn lint && yarn test:unit --ci'
        },
    })

    api.render('./template')
}
