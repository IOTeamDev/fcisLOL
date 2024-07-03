import type { NextApiRequest, NextApiResponse } from 'next';
import { createLink } from '@/src/lib/db/link/createLink';
import { deleteLink } from '@/src/lib/db/link/deleteLink';
import { getLinkById } from '@/src/lib/db/link/getLinkById';
import { updateLink } from '@/src/lib/db/link/updateLink';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                try {
                    const link = await getLinkById(Number(req.query.id));
                    res.status(200).json(link);
                } catch (error) {
                    res.status(500).json({ error: 'Failed to fetch link' });
                }
            }
            break;

        case 'POST':
            try {
                const newLink = await createLink(req.body, req.body.userRole);
                res.status(201).json(newLink);
            } catch (error) {
                res.status(500).json({ error: 'Failed to create link' });
            }
            break;

        case 'PUT':
            try {
                const updatedLink = await updateLink(Number(req.query.id), req.body.data);
                res.status(200).json(updatedLink);
            } catch (error) {
                res.status(500).json({ error: 'Failed to update link' });
            }
            break;

        case 'DELETE':
            try {
                await deleteLink(req.body.id);
                res.status(204).end();
            } catch (error) {
                res.status(500).json({ error: 'Failed to delete link' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
