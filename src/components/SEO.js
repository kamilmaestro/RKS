import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({title}) => (
    <Helmet title = {title + ' RKS'}
            htmlAttributes={{ lang: 'en' }}
    />
);

export default SEO;
