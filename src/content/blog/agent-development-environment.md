---
title: Agent Development Environments
description: My current workflow and tools. Not a paid advertisement.
date: 2026-07-27
tag: tools, workflow
---

If you've read my previous blog posts, you might find this quite ironic. In this article, I'm sharing my current toolset as a professional developer, and what my general workflows look like. Hint: It's a lot of AI now.

Here's the deal: I spent most of my time wrangling an insurmountably large codebase in my editor. It started with me consulting AI, then the paradigm shifted from code-then-agent to agent-then-code. The screen portions kept shifting. Eventually, a significant portion of my screen was the chat session history, then the current chat, and only a small slice of the pie was spent viewing the file I was in. The seemingly-vestigial current file view still fought for main stage, while the bulk of the action was happening in a chat. More often than not, I had too much going on, so I'd browse the diff on GitHub.

Needless to say, I was thinking about changing how I worked. I was itching to jump to full terminal, but still wanted (mouse!) visibility into my files. I just couldn't ditch the rest of the IDE. So I searched for something else (which is not new to me, I constantly try new tools to the chagrin of everyone around me). I'll admit, when I first heard the acronym 'ADE', I was thrown off. But I gave it a try, and it worked quite well. 

Without further ado,

I'm running [Orca](https://www.onorca.dev/) with [OhMyPi](https://omp.sh). Together, they're an advanced chat/worktree manager paired with probably the most powerful (and beautiful) agent TUI. There was frighteningly little friction with switching over to them completely. Orca lends directly to that—it's more about the session management than anything, and the file browser exists as a review tool.

I call them agent power tools whenever I talk about them. I spin up new worktrees in Orca, which opens up OMP, and I rip through several layers of context at once. Much of my work day seems to be just waiting for dings for the agents to finish what they're doing. Typically, 3-5 worktrees at once, sometimes spanning up to 3 repos at a time.

They're both, frankly, incredible. I still keep Zed around for popping open an actual file and writing some lines, sometimes, just to feel something.
