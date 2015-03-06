$(document).ready(function(){

  buzz = new BuzzwordCounter();

  var $source = $('#submit-text');
  var $show = $('#current-buzzwords');
  var $found = $('#found-buzzwords');
  $show.append(buzz.listCurrentBuzzwords());


  $source.click(function(){
    var sourceText = $('#source-text').val();
    var checkText = buzz.splitText(sourceText);
    var foundWords = buzz.checkBuzzwords(checkText);
    $found.empty().append(buzz.renderFoundWords(foundWords));
    buzz.foundWords = []
  });

});

function BuzzwordCounter() {
  this.text = '';
  this.buzzwords = ["align", "facilitate", "granular", "review", "cost", "schedule", "email", "strategy", "paradigm", "r.o.i.", "value", "customer", "space", "free", "proactive", "benchmark", "curate", "penetration", "driven", "sales", "off-line", "management", "risk", "restructuring", "timeline", "markets", "life cycle", "scalable"];
  this.buzzwordCounter = 0;
  this.foundWords = []
}

BuzzwordCounter.prototype.splitText = function(text) {
  this.text = text.toLowerCase();
  return this.text.split(" ");
}

BuzzwordCounter.prototype.checkBuzzwords = function(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    for (var j = this.buzzwords.length - 1; j >= 0; j--) {
      if (array[i] === this.buzzwords[j]) {
        this.foundWords.push(this.buzzwords[j]);
      }
    }
  };
  console.log(this.foundWords);
  return this.foundWords;
}


BuzzwordCounter.prototype.listCurrentBuzzwords = function() {
  var html = "<ul>"
  for (var i = this.buzzwords.length - 1; i >= 0; i--) {
    html+= "<li>" + " " + this.buzzwords[i] + " " + "</li>"
  };
  html += "</ul>"
  return html;
}

BuzzwordCounter.prototype.renderFoundWords = function(array) {
  var html = "<h3>Found Buzzwords:</h3>"
  html += "<ul>"
  for (var i = array.length - 1; i >= 0; i--) {
    html+= "<li>" + array[i] + "</li>"
  }
  html += "</ul>"
  return html;
}


/*
appropriately
assertively
authoritatively
collaboratively
compellingly
competently
completely
continually
conveniently
credibly
distinctively
dramatically
dynamically
efficiently
energistically
enthusiastically
fungibly
globally
holisticly
interactively
intrinsicly
monotonectally
objectively
phosfluorescently
proactively
professionally
progressively
quickly
rapidiously
seamlessly
synergistically
uniquely
actualize
administrate
aggregate
architect
benchmark
brand
build
cloudify
communicate
conceptualize
coordinate
create
cultivate
customize
deliver
deploy
develop
dinintermediate disseminate
drive
embrace
e-enable
empower
enable
engage
engineer
enhance
envisioneer
evisculate
evolve
expedite
exploit
extend
fabricate
facilitate
fashion
formulate
foster
generate
grow
harness
impact
implement
incentivize
incubate
initiate
innovate
integrate
iterate
leverage existing
leverage other's
maintain
matrix
maximize
mesh
monetize
morph
myocardinate
negotiate
network
optimize
orchestrate
parallel task
plagiarize
pontificate
predominate
procrastinate
productivate
productize
promote
provide access to
pursue
recaptiualize
reconceptualize
redefine
re-engineer
reintermediate
reinvent
repurpose
restore
revolutionize
scale
seize
simplify
strategize
streamline
supply
syndicate
synergize
synthesize
target
transform
transition
underwhelm
unleash
utilize
visualize
whiteboard
24/7
24/365
accurate
adaptive
alternative
an expanded array of
B2B
B2C
backend
backward-compatible
best-of-breed
bleeding-edge
bricks-and-clicks
business
clicks-and-mortar
client-based
client-centered
client-centric
client-focused
collaborative
compelling
competitive
cooperative
corporate
cost effective
covalent
cross functional
cross-media
cross-platform
cross-unit
customer directed
customized
cutting-edge
distinctive
distributed
diverse
dynamic
e-business
economically sound
effective
efficient
emerging
empowered
enabled
end-to-end
enterprise
enterprise-wide
equity invested
error-free
ethical
excellent
exceptional
extensible
extensive
flexible
focused
frictionless
front-end
fully researched
fully tested
functional
functionalized
fungible
future-proof
global
go forward
goal-oriented
granular
high standards in
high-payoff
high-quality
highly efficient
holistic
impactful
inexpensive
innovative
installed base
integrated
interactive
interdependent
intermandated
interoperable
intuitive
just in time
leading-edge
leveraged
long-term high-impact
low-risk high-yield
magnetic
maintainable
market positioning
market-driven
mission-critical
multidisciplinary
multifunctional
multimedia based
next-generation
one-to-one
open-source
optimal
orthogonal
out-of-the-box
pandemic
parallel
performance based
plug-and-play
premier
premium
principle-centered
proactive
process-centric
professional
progressive
prospective
quality
real-time
reliable
resource sucking
resource maximizing
resource-leveling
revolutionary
robust
scalable
seamless
stand-alone
standardized
standards compliant
state of the art
sticky
strategic
superior
sustainable
synergistic
tactical
team building
team driven
technically sound
timely
top-line
transparent
turnkey
ubiquitous
unique
user-centric
user friendly
value-added
vertical
viral
virtual
visionary
web-enabled
wireless
world-class
worldwide
action items
alignments
applications
architectures
bandwidth
benefits
best practices
catalysts for change
channels
clouds
collaboration and idea-sharing
communities
content
convergence
core competencies
customer service
data
deliverables
e-business
e-commerce
e-markets
e-tailers
e-services
experiences
expertise
functionalities
fungibility
growth strategies
human capital
ideas
imperatives
infomediaries
information
infrastructures
initiatives
innovation
intellectual capital
interfaces
internal or "organic" sources
leadership
leadership skills
manufactured products
markets
materials
meta-services
methodologies
methods of empowerment
metrics
mindshare
models
networks
niches
niche markets
nosql
opportunities
"outside the box" thinking
outsourcing
paradigms
partnerships
platforms
portals
potentialities
rocess improvements
processes
products
quality vectors
relationships
resources
results
ROI
scenarios
schemas
services
solutions
sources
strategic theme areas
storage
supply chains
synergy
systems
technologies
technology
testing procedures
total linkage
users
value
vortals
web-readiness
web services
*/

