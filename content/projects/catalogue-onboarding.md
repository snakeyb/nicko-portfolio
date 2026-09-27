---
title: Onboarding a Fragmented Product Catalogue
organisation: Pimberly · anonymised customer engagement
category: Data Modelling & Enterprise Onboarding
featured: true
order: 2
status: ongoing-pilot
technologies: [Data modelling, CSV feeds, Taxonomies, Export channels]
summary: Turning seven changing source feeds and real customer data into a usable product model and downstream outputs.
signal: Source analysis to working pilot
---
## The problem
A manufacturer's UK team receives product data from headquarters through seven separate feeds. It needs to add UK-specific content and assets without losing them when source data is imported again, then produce usable outputs for its own customers. The pilot covers roughly 10,000 records. Source columns have changed during the work, while final transfer access has not always been available.

## My contribution
I designed the product schema, taxonomy and feed mappings, and built a working pilot using the customer's real catalogue data. I worked through which attributes belong to the global source, which are owned by the UK team, and which outputs each downstream customer needs.

## The approach
Each source feed maps into a shared product model. UK additions remain separate from fields refreshed by headquarters, while export channels are shaped for the recipients. I kept the pilot moving through changes to the source structure and access dependencies, testing against real records rather than a cleaned sample.

## The result
The pilot is ongoing. Its success measure is usable product data that the UK team can send to its customers. It demonstrates the deployment work behind an integration: agreeing what a product record means, handling imperfect source data and building a repeatable path to the required output.
