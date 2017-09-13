// 自动化构建

var projectData = {
    'name' : 'ProjectModule',
    'fileData': [
        {
            'name': 'css',
            'type': 'dir'
        },
        {
            'name': 'js',
            'type': 'dir'
        },
        {
            'name': 'img',
            'type': 'dir'
        },
        {
            'name': 'index.html',
            'type': 'file',
            'content': '<html>\n\t<head>\n\t<title>MyProject</title>\n\t</head>\n\t<body>\n\t</body>\n</html>'
        }
    ]
}

var fs = require('fs')

if(projectData.name) {
    fs.mkdirSync(projectData.name)

    var fileData = projectData.fileData

    console.log(fileData)
    fileData.forEach(function(f) {
        f.content = f.content? f.content : ''

        f.path = projectData.name + '/' + f.name

        switch (f.type) {
            case 'dir':
                fs.mkdirSync(f.path)
                break;
            case 'file':
                fs.writeFileSync(f.path, f.content)
                break;
            default:

                break;
        }
    })




}