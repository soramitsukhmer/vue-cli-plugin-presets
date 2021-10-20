module.exports = api => {
    // Install additional dependencies
    api.extendPackage({
        engines: {
            node: ">=14.0.0 <=16"
        },
        scripts: {
            'bump:release': 'yarn version',
            'prebump:release': 'yarn lint && yarn test:unit --ci'
        },
    })

    api.render('./template')
}
