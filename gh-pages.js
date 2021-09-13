var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Kikasuru/mge-slotmachine.git',
        user: {
            name: 'Edlyn McGathy',
            email: '45546181+Kikasuru@users.noreply.github.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)