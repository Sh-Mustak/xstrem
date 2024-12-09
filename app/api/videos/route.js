import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'lib', 'videos.json');
    try {
        
        const fileContents = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContents);
        
        return Response.json(data);
    } catch (error) {
        
        return Response.json({ error: 'Unable to fetch data' }, { status: 500 });
    }
}
