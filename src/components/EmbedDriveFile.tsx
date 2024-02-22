import React from "react";

const EmbedDriveFile = ({ fileUrl }: { fileUrl: any }) => {
	const getIdFromUrl = (url: string): string | null => {
		const match = url.match(/[-\w]{25,}/);
		return match ? match[0] : null;
	};

	const embedUrl = `https://drive.google.com/file/d/${getIdFromUrl(
		fileUrl
	)}/preview`;

	return (
		<div>
			<iframe
				className=" min-h-[70vh] min-w-[50vw]"
				title="Google Drive Embed"
				src={embedUrl}
				allowFullScreen
			></iframe>
		</div>
	);
};

export default EmbedDriveFile;
