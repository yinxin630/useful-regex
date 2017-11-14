export default {
    input: './src/index.js',
    output: {
        file: 'dist/useful-regex.js',
        name: 'useful-regex',
        format: 'umd'
    },
    env: process.env.NODE_ENV,
    sourcemap: false,
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [

    ],
    globals: {

    }
}
