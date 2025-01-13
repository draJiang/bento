// 'use client'

import Image from 'next/image';
import type { Metadata } from "next";
import { getAllPosts } from "../lib/api"
import Link from 'next/link';
import PostList from '@/app/ui/PostList'
import { tree } from 'next/dist/build/templates/app-page';

export const metadata: Metadata = {
    title: "Blog-Bento",
    description: "Share thoughts and methods related to learning and note-taking.",
};

export default function Posts() {

    const posts = getAllPosts("_posts")

    return (
        <main className='p-4 mt-2 md:mt-14 w-full max-w-2xl'>
            <PostList href='posts' posts={posts} showExcerpt={true} showTime={true} />
        </main>

    );
}
