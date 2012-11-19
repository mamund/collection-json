= Adding Extensions =

Collection+JSON was designed to support optional extensions rather easily. 
While devs are free to invent new extensions and use them in their own
implementations, it is a good idea to create "registered" extensions that
appear here in the repo. The advantages of doing this include getting useful
feedback from others in the group, sharing approved extensions with existing
developer community, and getting to say your work is one of the "approved"
extensions for CJ.

It is also possible that one or more registered extensions may, at some future
point, be rolled up into a new vesrion of CJ.

== Optional, Ignored ==
It is important to keep in mind that all CJ extensions MUST be treated as
_optional_ and _ignored_. That means the extension cannot invalidate or
override any
baseline functionality defined in CJ and that you should expect existing client
implementations to ignore this extension. This rule will affect the design and
feasibility of extensions; in some cases making a particular extension
implementation almost impossible. 

== Process for Adding an Extension ==
The process for adding an extension is raather informal, but has been designed
to take advantage of the existing CJ community for feedback and approval. Teh
basic steps are as follows:

 . Start a discussion thread on collection-json mailing list
 . Fork the CJ repo
 . Add a new extension definition to the extensions folder in your repo
 . Send a Pull Request to the shared repo
 . Continue discussions in the ML and the repo comments
 . Once all is settled, the PR will be merged into the CJ master repo

== Approval is Not Required ==
Its important to point out that no one is _required_ to register their
extensions in the CJ repo. This is an optional process designed to improve the
quality of the extension set and increase the likelihood of their use across
the CJ community. 

Feel free to discuss this, and any other topic, on the collection-json mailing
list any time.

<a href="http://twitter.com/mamund" title="@mamund">Mike Amundsen</a>
