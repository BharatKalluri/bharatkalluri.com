import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [...nextVitals, { ignores: ['.content-collections/**'] }];

export default eslintConfig;
