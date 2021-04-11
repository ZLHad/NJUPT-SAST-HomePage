
// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    routes: [
        {
            path: '/',
            routes: [
                { path: '/', component: '../pages/index' }
            ]
        }
    ],
    hash: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: { webpackChunkName: true },
            title: 'NJUPT-SAST-HomePage',
            dll: false,
            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//,
                ],
            },
        }],
    ],
}
