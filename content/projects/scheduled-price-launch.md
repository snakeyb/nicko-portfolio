---
title: Designing a Scheduled Price Launch
organisation: Pimberly · anonymised prospect engagement
category: Integration Architecture & Constraint Analysis
featured: false
order: 6
status: proposed-design
technologies: [GraphQL, API constraints, iPaaS, Scheduled cutover]
summary: A costed design for changing varied sale prices across roughly 80,000 SKUs at a fixed time.
signal: Costed design · cutover not yet run
---
## The problem
A retailer needs varied sale prices across a catalogue of roughly 80,000 SKUs to become visible at a fixed time. Applying every change at the deadline through the standard connector would put a large read-and-write workload on the storefront API.

## My contribution
I investigated the connector's behaviour and the API cost and throttling constraints, then challenged the obvious plan to push all changes through the usual sync path. I worked with product and integration stakeholders to shape and cost an alternative.

## The approach
The proposed design stages prices in the PIM ahead of the event. At cutover, a scheduled integration job reads the prepared values and writes the required price fields directly through the storefront API. That avoids the connector's broader read-before-write path for this specific operation and allows discounts to differ by SKU.

## The result
This is a costed design for a prospective customer, not a completed launch. Its value as a case study is the investigation and decision: establish the workload and platform constraints before committing a revenue-critical event to an integration path.
