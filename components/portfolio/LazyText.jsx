import dynamic from 'next/dynamic';

const LazyText = dynamic(() => import('./TextComponent'), {
    loading: () => <p>Loading...</p>,
});

export default LazyText;