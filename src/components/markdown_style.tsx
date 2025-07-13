export const markdownComponents = {
	h1: ({ node, ...props }) => (
		<h1
			className='scroll-m-20 text-4xl font-extrabold tracking-tight my-6 text-white'
			{...props}
		/>
	),
	h2: ({ node, ...props }) => (
		<h2
			className='scroll-m-20 text-3xl font-semibold tracking-tight my-5 text-white'
			{...props}
		/>
	),
	h3: ({ node, ...props }) => (
		<h3
			className='scroll-m-20 text-2xl font-semibold tracking-tight my-4 text-white'
			{...props}
		/>
	),
	p: ({ node, ...props }) => <p className='leading-7 mb-4 text-base text-gray-200' {...props} />,
	ul: ({ node, ...props }) => (
		<ul className='list-disc list-inside ml-6 mb-4 text-gray-200' {...props} />
	),
	ol: ({ node, ...props }) => (
		<ol className='list-decimal list-inside ml-6 mb-4 text-gray-200' {...props} />
	),
	li: ({ node, ...props }) => <li className='mb-1' {...props} />,
	a: ({ node, ...props }) => <a className='text-blue-400 hover:underline' {...props} />,
	blockquote: ({ node, ...props }) => (
		<blockquote
			className='border-l-4 border-gray-600 pl-4 italic text-gray-400 my-4'
			{...props}
		/>
	),
	code: ({ node, inline, className, children, ...props }) => {
		if (inline) {
			return (
				<code
					className='bg-gray-700 rounded px-1 font-mono text-sm text-white'
					{...props}>
					{children}
				</code>
			);
		}
		return (
			<pre className='bg-slate-800 text-white p-4 rounded-md overflow-auto my-4' {...props}>
				<code className='font-mono text-sm'>{children}</code>
			</pre>
		);
	},
	hr: ({ node, ...props }) => <hr className='my-6 border-gray-700' {...props} />,
	strong: ({ node, ...props }) => <strong className='font-semibold text-white' {...props} />,
	em: ({ node, ...props }) => <em className='italic text-gray-300' {...props} />,
};
