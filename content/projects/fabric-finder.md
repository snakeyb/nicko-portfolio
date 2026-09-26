---
title: Fabric Finder
organisation: Client project
category: Applied AI & Search
featured: true
order: 3
status: draft-review-required
technologies: [Supabase, Embeddings, Semantic Search, Evaluation]
summary: Helping textile buyers turn an open-ended brief into an explainable shortlist of fabrics.
signal: Structured requirements plus semantic discovery
---
## The problem
A buyer can describe a fabric in ordinary language, while a mill catalogues its stock through structured attributes. Search has to bridge that gap without treating every loose text similarity as an equally good match.

## My contribution
I designed the search and evaluation approach and directed AI-assisted development of the buyer workflow. That included deciding which requirements should be interpreted as structured constraints, how the ranking should be assessed and what evidence should be retained for review.

## The approach
Structured attributes and deterministic ranking handle requirements that can be checked directly. Embeddings help find relevant fabrics when a brief is less precise. Search runs retain their result evidence, enabling later inspection and expert evaluation rather than relying on an opaque score alone.

## The result
The buyer-search application is being developed and evaluated against real briefs. The goal is a useful shortlist that an expert can inspect, question and improve through deliberate evaluation.
