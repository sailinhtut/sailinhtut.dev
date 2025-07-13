'use client';

import MarkdownIt from 'markdown-it';
import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false });

interface Props {
	content: string;
	onChange: (content: string) => void;
}

export default function MarkdownEditor({ content, onChange }: Props) {
	const mdParser = new MarkdownIt();

	const handleEditorChange = ({ text }: { html: string; text: string }) => {
		onChange(text);
	};

	return (
		<div>
			<MdEditor
				value={content}
				style={{ height: '300px' }}
				renderHTML={(text) => mdParser.render(text)}
				onChange={handleEditorChange}
			/>
		</div>
	);
}
