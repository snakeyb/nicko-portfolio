---
title: Enterprise MCP Integration
organisation: Pimberly
category: MCP & Enterprise Integration
featured: true
order: 1
status: draft-review-required
technologies: [MCP, REST APIs, Claude Code, n8n]
summary: Turning a laborious custom demo workflow into a set of focused tools for faster, more relevant customer demonstrations.
signal: Discovery to prototype to team adoption
---
## The problem
Customer-specific demos required substantial manual configuration through the product interface. The API offered another route, but its endpoints and large responses made direct use awkward for the presales team.

## My contribution
I identified the repeatable work, explored the API and designed an MCP interface around the tasks needed to assemble a relevant demo. I directed AI-assisted implementation, tested the tools against real presales workflows and worked with colleagues in Presales and Engineering as the prototype developed.

## The approach
The design uses small, purpose-specific tools for distinct operations rather than a single broad tool that hides too many decisions. API responses are filtered where needed so the useful data can be handled efficiently. This keeps the workflow inspectable and gives the operator control over each step.

## The result
I took the integration from a presales workflow problem to a working prototype in roughly two weeks. It is used by the presales team and saves approximately 2–3 working days of preparation for a custom demo. Engineering adopted the design as a proof of concept for further development.
