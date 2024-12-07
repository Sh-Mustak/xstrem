import path from 'path';
import { promises as fs } from 'fs';

export async function GET(_request, { params }) {
    const { id } = params;
    const filePath = path.join(process.cwd(), 'lib', 'videos.json');

    try {
        const fileContents = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContents);
        const video = data.find((item) => item.videoId === id);

        if (video) {
            return Response.json(video);
        }

        return Response.json({ error: 'Video not found' }, { status: 404 });
    } catch (error) {
        return Response.json({ error: 'Unable to fetch data' }, { status: 500 });
    }
}