import dynamic from 'next/dynamic';

const LazyText = dynamic(() => import('./TextComponent'), {
    loading: () => <p suppressHydrationWarning>Loading...</p>,
});

export default LazyText;