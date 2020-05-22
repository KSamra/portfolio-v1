# Styling Guide

Styles will be separated using the B.E.M (Blocks, Elements, Modifiers) model commonly used for CSS styling. This works as follows.

## Blocks
The highest level of abstraction. Blocks are responsible for providing the context for Elements, for rendering elements, 
and handling UI logic. For example, a `Card` could be considered a Block and it would be composed of various child Elements like an `Image`, `Text`, `Title`, etc.

## Elements
Elements are the smallest, indivisible parts of the UI. They aren't responsible for application or UI Logic, but they do handle their own Modifiers which modify the Elements's style. Element's can exist in the context of a Block (in the same folder) or they can be completely standalone and be found in `/elements`.