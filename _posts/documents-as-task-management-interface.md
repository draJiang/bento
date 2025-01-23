---
title: "Documents as Task Management Interface"
excerpt: "Documents aren't just static text repositories - they can be powerful interfaces for task management. This post explores how using documents as a task management interface offers unique advantages like flexible input, freedom of annotation, and context preservation. Through examining existing solutions and introducing Bento, we'll see how combining the best aspects of different approaches can create an ideal task management workflow that's both efficient and natural to use."
date: "2025-01-23"
---

# Documents as Task Management Interface

Documents/notes are often considered one of the "indie developer essentials," leading some to view document tools as lacking creativity. However, documents themselves aren't the product - they're a human-computer interaction interface. The real product lies in what you accomplish through this interface and how you do it.

In "Documents as Human-Computer Interface," we explored various advantages of documents. Let's further examine how these advantages apply specifically to task management scenarios.

## Why Use Documents as a Task Management Interface

### Flexible Input

Documents don't restrict how you use them or their format. When I'm recording thoughts in an intermittent journal style, I can directly add tasks as they come to mind. Time information for tasks can be optional, approximate, or range-based, without being forced to create hour-precise schedules.

### Freedom of Annotation

Documents allow you to annotate any information. For example, you can write down important notes about tasks or break them down into smaller sub-tasks directly beneath the main task.

### Context Preservation

Every task exists within a context. When you're recording various information and encounter related tasks, you can note them down right there, preserving their contextual environment.

For instance, during meeting notes, you can quickly jot down tasks, and when reviewing later, you can understand the context - why the task needs to be done and what problem it solves.

## Issues with Existing Solutions

A good todo/note-taking tool should meet two criteria:

1. Quick input/capture of information you want to record

2. Ability to find this information when needed

### Raycast Notes

Raycast Notes supports quick information recording through shortcuts, with a floating window that works on any screen (including macOS fullscreen mode), satisfying the first requirement of quick input.

The floating window interaction makes it convenient to open alongside the main window for reference, reducing window switching. This partially meets the "findability" requirement, but it's not enough.

I tend to record various scattered thoughts and reminders in my notes. Having all this information mixed makes it difficult to find previously recorded information.

### Logseq

Addressing the above issues, Logseq allows tagging any line with labels like #work, #home, enabling simple categorization. You can later aggregate this information through its query feature, solving the "findability" requirement.

Unfortunately, Logseq lacks Raycast Notes' mobility. Frequent information recording becomes cumbersome with constant window switching. The lack of window pinning makes it difficult to reference recorded information during current tasks.

## Seeking the Ideal Solution

After exploring these options, I naturally wondered if there was a product combining Logseq and Raycast's strengths. Finding none, I created Bento.

![](https://jiangzilong-image.oss-cn-beijing.aliyuncs.com/uPic/Ql1fZN.png)

Bento offers the same mobility as Raycast Notes, floating above any interface (including fullscreen), making it convenient to view and record information anywhere. It also supports reading and writing local md/txt files, enabling collaboration with local note-taking tools like Logseq and Obsidian.

![](https://jiangzilong-image.oss-cn-beijing.aliyuncs.com/uPic/CleanShot 2025-01-22 at 01.21.07@2x.png)

## Value Derived from the Current Solution

### Low-Pressure Recording

Recording needs often relate to current tasks - whether browsing articles, chatting with friends on social media, or discussing work in video meetings. Bento allows me to **record thoughts without leaving the current task**.

Combined with Logseq's Query functionality, I **don't need to decide where to save information** - I just write on the newest line, maybe adding simple tags like #home or #work. It automatically aggregates later, maximizing the document's **flexible input** feature.

### Universal Reference

Thanks to the floating window, recorded information can be easily referenced anywhere. For example, design revision points noted during video meetings can be referenced while editing in Figma.

![](https://jiangzilong-image.oss-cn-beijing.aliyuncs.com/uPic/Et4Yk6.png)

### Solving Problems Without Building Complete Software

Interchangeable views mean different applications can operate on and present the same data.

Bento's ability to read/write md files allows it to collaborate with tools like Logseq and Obsidian, focusing solely on information capture without needing to develop a full-featured note-taking tool. I sincerely hope more tools will support open data formats, benefiting both developers and users.

## Conclusion

Creating the future isn't about how we learn but how we forget - forget preconceptions about documents, view them as a human-computer interaction interface, and explore the endless possibilities behind the blank canvas.

