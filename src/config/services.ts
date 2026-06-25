/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

// TODO: replace these placeholder photos with real job-site images for each service
// (every slug currently points at a cloned stock photo — see src/assets/services/).
import excavationServicesImg from '../assets/services/excavation-services.jpg';
import landGradingImg from '../assets/services/land-grading.jpg';
import sitePreparationImg from '../assets/services/site-preparation.jpg';
import drivewayInstallationImg from '../assets/services/driveway-installation.jpg';
import drainageSolutionsImg from '../assets/services/drainage-solutions.jpg';
import landClearingImg from '../assets/services/land-clearing.jpg';
import pondExcavationImg from '../assets/services/pond-excavation.jpg';
import dirtWorkHaulingImg from '../assets/services/dirt-work-hauling.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Land Grading & Leveling"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'excavation-services',
    name: 'Excavation Services',
    short: 'Excavation Services',
    blurb: 'Grading, site prep, driveways, drainage, clearing, ponds, and hauling — one local crew with the iron to move dirt right across Benton County.',
    description:
      'We are a full-service excavation and site work company covering Benton County and the rest of Northwest Arkansas, from the booming subdivisions around Bentonville and Rogers out to the rural acreage near Gravette, Decatur, and Garfield. If it involves moving dirt, shaping a lot, or getting water to drain, we handle it: land grading and leveling, site preparation and building pads, gravel driveways, drainage systems, land clearing and brush removal, pond digging, and dirt hauling. Northwest Arkansas is growing fast, and a lot of that growth is happening on rocky Ozark ground where new lots fight poor drainage, steep grades, and shallow rock that a homeowner-grade machine cannot touch. We work with both general contractors who need a builder pad ready on schedule and homeowners who need a driveway that quits washing out or a yard that finally drains. You call, tell us what the project is, and we come look, give you a real number, and run the equipment to do it right the first time.',
    sections: [
      {
        h: 'One crew for the whole dirt job',
        body: 'A lot of projects stall because one company clears, another grades, and a third hauls — and nobody owns the result. We do all of it. Clearing and grubbing, rough and finish grading, building pads, driveways, drainage, ponds, and hauling spoil off-site or bringing fill in. That continuity matters: the crew that strips and shapes your lot is the crew that knows exactly how the water wants to move across it, so the driveway and the drainage actually work together instead of fighting each other.',
      },
      {
        h: 'Built for Northwest Arkansas ground',
        body: 'Excavation in Benton County is not flat-farmland work. The Ozark soils are rocky, a lot of lots sit on shallow limestone, and the explosive growth around Bentonville and Rogers means new homes going up on grades that shed water straight onto the next lot. We bring the right machines for rock and slope, we cut and fill so a pad sits where it should, and we plan grade and drainage together so the finished site does not wash, pond, or send runoff where it does not belong.',
      },
      {
        h: 'Straight answers, real numbers',
        body: 'Dirt work is easy to underbid and then nickel-and-dime, especially once a machine hits rock no one accounted for. We do not work that way. We come walk the site, tell you what the ground is actually going to take, and quote the scope up front. If a job needs more rock removal or a bigger pad than you figured, we say so before we start — so you can plan the budget instead of getting surprised when the invoice shows up.',
      },
    ],
    points: [
      'Grading, site prep, driveways, drainage, clearing, ponds, and hauling — one crew',
      'Residential and builder/GC work across Benton County',
      'Equipment sized for rocky Ozark soils and sloped lots',
      'Honest, up-front pricing with the rock and scope spelled out',
      'Grade and drainage planned together so the finished site works',
      'On-site walkthrough before we quote — no sight-unseen guesses',
    ],
    faqs: [
      {
        q: 'What kind of excavation and site work do you do?',
        a: 'Just about anything involving dirt: land grading and leveling, site preparation and building pads, gravel driveway installation, drainage systems, land clearing and brush removal, pond excavation, and dirt work and hauling. One crew handles the whole job across Benton County, so the grading and the drainage actually work together.',
      },
      {
        q: 'Do you work with general contractors and builders?',
        a: 'Yes — a big share of our work is builder and GC site prep around Bentonville, Rogers, and Centerton. We clear, cut, fill, and pad lots on schedule so the foundation crew can start on time. We also work directly with homeowners on driveways, drainage, grading, and ponds.',
      },
      {
        q: 'My lot is rocky and on a slope — is that a problem?',
        a: 'That is normal here. Most of Benton County sits on rocky Ozark soil over shallow limestone, and a lot of newer lots are graded steep. We bring machines built for rock and slope, and we plan the cut, fill, and drainage so a tough lot still ends up with a usable, well-draining site.',
      },
      {
        q: 'How do I get a price?',
        a: 'Call and tell us roughly what the project is — a driveway, a pad, grading, drainage, clearing, or a pond. For anything but the smallest jobs we come walk the site, because the ground and the access drive the cost. Then we give you a real number up front, not a sight-unseen guess.',
      },
    ],
    image: excavationServicesImg,
    imageAlt: 'Excavator working on a residential site preparation job in Northwest Arkansas',
    hubOnly: true,
  },
  {
    slug: 'land-grading',
    name: 'Land Grading & Leveling',
    short: 'Land Grading',
    blurb: 'Uneven, sloped, or poorly draining lot? We cut, fill, and grade it to a stable, properly sloped surface that sheds water.',
    description:
      'Grading is the foundation of almost every site project, and getting it right is the difference between a lot that drains and one that floods. We grade and level residential and builder lots across Benton County — cutting down high spots, filling low ones, and shaping the surface so water runs where it should instead of pooling against a foundation or washing across a driveway. Out here in Northwest Arkansas, a lot of grading work comes from new construction on rocky, sloped ground around Bentonville, Rogers, and Centerton, plus older properties where the original grade has settled or was never done right and now the yard holds water or sheds it onto the neighbor. We rough-grade for builders to get a pad and lot ready, and we finish-grade yards so they are smooth, stable, and pitched away from the house. The grade you set is the grade you live with, so we take the time to shoot it right.',
    sections: [
      {
        h: 'Why grade is everything on a NWA lot',
        body: 'On the rocky, rolling ground common across Benton County, the slope of your lot decides where every drop of rain goes. A lot graded flat or pitched the wrong way sends water toward the foundation, ponds in the yard, or dumps onto the lot next door — all of which cause real damage and real disputes. Proper grading establishes a positive slope away from structures and toward the places water can safely go, which is the single cheapest thing you can do to protect a building and a yard.',
      },
      {
        h: 'Rough grading vs. finish grading',
        body: 'Rough grading is the heavy cut-and-fill that shapes a raw or rough lot to design grade — what a builder needs before a pad goes in. Finish grading is the final smoothing and shaping that leaves a yard ready for sod, seed, gravel, or paving and pitched to drain. We do both. On new construction we rough-grade the lot and pad; on existing properties we re-establish a yard that has settled or never drained, and finish it so it is smooth and stable.',
      },
      {
        h: 'Working with rock and slope',
        body: 'Grading in the Ozarks often means dealing with shallow limestone and grades steeper than they look. We bring machines that can cut into rock and hold a line on a slope, we move excess material off-site or use it as fill where it works, and we compact fill so the finished grade does not settle later. The goal is a surface that is stable underfoot, holds its shape, and moves water the way it is supposed to.',
      },
    ],
    points: [
      'Cut-and-fill grading to a stable, properly sloped surface',
      'Positive slope established away from foundations and structures',
      'Rough grading for builders and finish grading for yards',
      'High spots cut down, low spots filled and compacted',
      'Excess rock and spoil hauled off or reused as fill',
      'Grade shot and checked so it actually drains',
    ],
    faqs: [
      {
        q: 'My yard holds water after it rains — can grading fix it?',
        a: 'Usually, yes. Standing water in a yard almost always means the grade is flat or pitched the wrong way, so water has nowhere to go. Re-grading to establish a positive slope away from the house and toward a safe outlet is the most common fix. Sometimes we pair it with a drain, but often the grade alone solves it.',
      },
      {
        q: 'What is the difference between rough grading and finish grading?',
        a: 'Rough grading is the heavy cut-and-fill that shapes a lot to design grade — what a builder needs before construction. Finish grading is the final smoothing that leaves the surface ready for sod, seed, gravel, or paving and pitched to drain. We do both, and many jobs need both.',
      },
      {
        q: 'Will the fill settle and undo the grading?',
        a: 'Not if it is done right. We place and compact fill in lifts so it stays put instead of settling later and leaving low spots. Cutting corners on compaction is how a fresh grade turns back into a puddle after a season — we do not skip it.',
      },
    ],
    image: landGradingImg,
    imageAlt: 'Dozer grading and leveling a sloped residential lot in Benton County, Arkansas',
  },
  {
    slug: 'site-preparation',
    name: 'Site Preparation',
    short: 'Site Prep',
    blurb: 'Getting a lot ready to build? We clear, strip, cut, fill, and pad so the foundation crew can start on schedule.',
    description:
      'Site preparation is everything that has to happen before a foundation goes in, and on a Northwest Arkansas lot that is a lot of work. We prep residential and commercial building sites across Benton County — clearing and grubbing the lot, stripping topsoil, cutting and filling to design grade, building and compacting the building pad, and roughing in the driveway and drainage so the site is ready for the next trade. With the building boom around Bentonville, Rogers, and Centerton, builders and GCs need pads ready on schedule, and homeowners building on their own acreage near Pea Ridge, Gravette, or Garfield need a raw lot turned into a buildable site. The rocky Ozark ground out here makes pad work its own challenge — shallow rock, slope, and soils that have to be compacted properly so a foundation does not settle. We do the dirt work that the whole rest of the project sits on, literally, so we do it right.',
    sections: [
      {
        h: 'From raw lot to ready-to-build',
        body: 'A buildable site is more than a cleared lot. We clear and grub vegetation and stumps, strip and stockpile topsoil, cut and fill the lot to the grade the plans call for, build the pad where the structure goes, compact it so it carries the load, and rough in the access and drainage. By the time we are off the site, the foundation crew can come in and start — which is exactly what a builder on a schedule needs.',
      },
      {
        h: 'Pads that do not settle',
        body: 'A building pad is only as good as its compaction. On the rocky and clay soils around Benton County, a pad that is not built and compacted in proper lifts will settle unevenly and crack what is built on top of it. We build pads to spec, compact them properly, and account for the shallow rock and slope common here so the structure sits on stable, load-bearing ground.',
      },
      {
        h: 'On schedule for builders',
        body: 'Builders and GCs around Bentonville and Rogers live and die by the schedule, and dirt work is the first domino. We coordinate with the builder, get the lot cleared, graded, and padded on time, and rough in driveway and drainage so the site keeps moving. When the dirt work runs late, everything behind it runs late — so we treat the schedule as part of the job.',
      },
    ],
    points: [
      'Clearing, grubbing, and topsoil stripping',
      'Cut and fill to design grade for the building footprint',
      'Building pads built and compacted to spec',
      'Driveway access and drainage roughed in',
      'Coordination with builders and GCs to hold the schedule',
      'Pad work sized for rocky, sloped Ozark lots',
    ],
    faqs: [
      {
        q: 'What does site preparation include?',
        a: 'Everything between a raw lot and a buildable site: clearing and grubbing, stripping topsoil, cutting and filling to grade, building and compacting the pad, and roughing in the driveway and drainage. When we are done, the foundation crew can start. We scope it to whatever the plans and the lot require.',
      },
      {
        q: 'Can you have a pad ready on a builder’s schedule?',
        a: 'Yes. A lot of our work is builder and GC site prep around Bentonville, Rogers, and Centerton, and we know the dirt work is the first thing the whole schedule waits on. We coordinate up front and get the lot cleared, graded, and padded on time so the project keeps moving.',
      },
      {
        q: 'Why does pad compaction matter so much?',
        a: 'Because the foundation sits on it. A pad that is not built and compacted in proper lifts settles unevenly, and that cracks slabs and foundations. On the rock and clay common here, proper compaction is what keeps a structure on stable ground — it is not a step worth cutting.',
      },
    ],
    image: sitePreparationImg,
    imageAlt: 'Excavator preparing a building pad on a new construction site in Northwest Arkansas',
  },
  {
    slug: 'driveway-installation',
    name: 'Driveway Installation & Gravel',
    short: 'Driveways',
    blurb: 'New gravel driveway or a washed-out one that needs rebuilding? We grade, base, and rock it so it lasts and drains.',
    description:
      'A driveway on a rural or sloped Northwest Arkansas lot takes a beating, and a driveway built without the right base and drainage washes out, rutts, and turns to mud. We build and rebuild gravel driveways across Benton County — cutting and grading the route, laying a proper compacted base, installing culverts and crowning the surface so water runs off instead of down the middle, and topping it with the right rock for the use. A lot of our driveway work is on the longer drives out toward Gravette, Decatur, Pea Ridge, and Garfield where a homeowner is tired of regrading washboard and potholes every spring, plus new builds that need an access drive roughed in. The Ozark terrain makes driveways tricky — slope sends water straight down the drive, and rocky ground and clay both cause their own problems — so we build the base and the drainage to handle it, not just dump gravel and hope.',
    sections: [
      {
        h: 'Why most gravel driveways fail',
        body: 'A driveway that ruts, washes, and potholes almost always has the same two problems: no real base, and no plan for water. Gravel dumped on bare dirt sinks into the mud and disappears; a drive with no crown or culvert lets water run down it and cut channels. We build the base in compacted layers so the rock stays where it is put, crown the surface so water sheds to the sides, and add culverts where the drive crosses a drainage path so it does not wash out at the low spot.',
      },
      {
        h: 'Slope, culverts, and drainage',
        body: 'On the sloped lots common around Benton County, a long driveway is also a channel for runoff if you let it be. We grade the drive to shed water, install culverts under it where ditches and swales cross, and tie the drainage into the rest of the site so water leaves the drive instead of carving it up. Getting the water off the driveway is what keeps the rock on it.',
      },
      {
        h: 'The right rock for the job',
        body: 'Different drives need different rock. A base course of larger crushed stone gives a stable foundation; a finer top course drives smooth and packs tight. For a long rural drive that sees trucks and equipment, the build is heavier than a short residential approach. We use the right material and the right depth for how the drive will be used, so it holds up instead of needing a fresh load of gravel every year.',
      },
    ],
    points: [
      'New gravel driveways and rebuilds of washed-out drives',
      'Route cut, graded, and crowned to shed water',
      'Compacted base course so the rock stays put',
      'Culverts installed where drainage crosses the drive',
      'Right rock and depth chosen for the use and traffic',
      'Drainage tied into the rest of the site',
    ],
    faqs: [
      {
        q: 'My gravel driveway washes out and potholes every year — why?',
        a: 'Almost always because it has no real base and no plan for water. Gravel on bare dirt sinks into the mud, and a drive with no crown or culvert lets runoff cut channels down it. We rebuild with a compacted base, a crowned surface, and culverts where water crosses, so the rock stays put and the drive sheds water.',
      },
      {
        q: 'Can you build a long driveway on a rural sloped lot?',
        a: 'Yes — long rural drives out toward Gravette, Decatur, and Garfield are a lot of what we do. The slope is exactly why the base and drainage matter: we grade the drive to shed water, set culverts where ditches cross, and build a base heavy enough for the trucks and equipment a rural drive sees.',
      },
      {
        q: 'What kind of gravel do you use?',
        a: 'It depends on the drive. A base course of larger crushed stone gives stability, and a finer top course packs tight and drives smooth. A long drive that sees heavy traffic gets a heavier build than a short residential approach. We match the rock and the depth to how the drive will actually be used.',
      },
    ],
    image: drivewayInstallationImg,
    imageAlt: 'Newly graded and graveled rural driveway in Benton County, Arkansas',
  },
  {
    slug: 'drainage-solutions',
    name: 'Drainage Solutions',
    short: 'Drainage',
    blurb: 'Standing water, a wet basement, or runoff from the lot next door? We diagnose the water and grade and pipe it away.',
    description:
      'Water is the number-one enemy of a Northwest Arkansas property, and on the rocky, sloped ground around Benton County it shows up everywhere: ponding in the yard, runoff sheeting off a neighboring lot, a soggy spot that never dries, a wet crawlspace or basement, or a culvert and ditch that have failed and now flood the driveway. We diagnose and fix drainage problems across the region. The right fix depends on where the water comes from and where it can safely go, so we start by reading the grade and the runoff, then solve it with the right tool — regrading to establish slope, French drains and surface drains to collect water, swales and ditches to carry it, culverts to cross it under drives, and outlets to get it off the property safely. With the explosive new construction here, a lot of drainage problems come from lots graded to shed water onto the lot below — and those are fixable. We get the water under control before it damages a foundation or a yard.',
    sections: [
      {
        h: 'Find the water before you fix it',
        body: 'Drainage problems get solved by figuring out where the water is coming from, where it wants to go, and where it can safely end up — not by guessing. We walk the property and read the grade: is the water surface runoff from uphill, roof and gutter discharge, a high water table, or a yard graded the wrong way? The fix follows the diagnosis. Putting in a drain without understanding the water is how people spend money and still have a wet yard.',
      },
      {
        h: 'The right tool for the water',
        body: 'There is no single drainage fix. Sometimes the answer is regrading to establish a slope that moves water on its own. Sometimes it is a French drain to pull subsurface water, a surface drain or channel drain to catch ponding, a swale or ditch to carry runoff, or a culvert to take water under a driveway. Often it is a combination, with a proper outlet so the water actually leaves the property. We use whichever solves your specific problem instead of selling one product for every job.',
      },
      {
        h: 'New construction and neighbor runoff',
        body: 'With Benton County growing as fast as it is, a lot of drainage trouble comes from new lots graded to shed water straight onto the next property, or from a build that changed how water moves across an area. Those are common and fixable — we intercept and redirect the runoff, regrade where we can, and pipe or channel it to a safe outlet so your lot stops taking on someone else’s water.',
      },
    ],
    points: [
      'Diagnosis of where the water comes from and where it can go',
      'Regrading to establish positive slope away from structures',
      'French drains and surface drains to collect standing water',
      'Swales, ditches, and culverts to carry and cross runoff',
      'Proper outlets so water actually leaves the property',
      'Intercepting and redirecting runoff from neighboring lots',
    ],
    faqs: [
      {
        q: 'I have standing water in my yard — what fixes it?',
        a: 'It depends on the cause. If the grade is flat or pitched wrong, regrading to establish slope often does it. If water collects in a low area, a surface or French drain to a proper outlet may be needed. We read the grade and the runoff first so the fix matches the actual problem instead of guessing.',
      },
      {
        q: 'The lot next door drains onto mine — can that be fixed?',
        a: 'Yes, and it is common here with all the new construction. We intercept and redirect that runoff with a swale, a drain, or regrading, and route it to a safe outlet so your property stops taking on the neighbor’s water. We diagnose where it is entering and cut it off there.',
      },
      {
        q: 'Will a French drain fix my wet basement or crawlspace?',
        a: 'Often it helps, but only if the surface water and grade around the foundation are handled too. A wet basement is usually water that should never have reached the foundation in the first place. We look at the grade, gutters, and runoff around the house first, then add subsurface drainage if it is still needed.',
      },
    ],
    image: drainageSolutionsImg,
    imageAlt: 'Drainage trench and pipe being installed to carry runoff away from a home in Benton County',
  },
  {
    slug: 'land-clearing',
    name: 'Land Clearing & Brush Removal',
    short: 'Land Clearing',
    blurb: 'Overgrown lot, brush, trees, or stumps in the way? We clear and grub it down to clean, usable ground.',
    description:
      'Before you can build, grade, fence, or farm a piece of Northwest Arkansas ground, it often has to be cleared — and the wooded, brushy lots common across Benton County can be a real job. We clear and grub land of all sizes, from a single overgrown residential lot to acreage out toward Gravette, Decatur, and Garfield. We take down brush and unwanted trees, grind or pull stumps, grub out roots, and haul off or pile and burn the debris, leaving clean, workable ground. A lot of our clearing is the first step in a bigger project — site prep for a new home, a pad for a barn or shop, a pasture, a building site on raw acreage, or opening up a view — so we clear with the next step in mind, taking the lot down to the grade and condition the project actually needs. We work around the trees you want to keep and clear out the rest.',
    sections: [
      {
        h: 'Clearing with the next step in mind',
        body: 'Clearing is rarely the whole job — it is the start of a build, a pad, a pasture, or a graded lot. We clear with that in mind: stripping the lot to the condition the next step needs, grubbing roots so they do not interfere with grading or a foundation, and leaving the ground workable instead of just knocking down brush and walking away. If grading or a pad comes next, we are set up to roll straight into it with the same crew.',
      },
      {
        h: 'Brush, trees, and stumps',
        body: 'A full clearing means more than cutting brush. We remove unwanted trees, grind or pull stumps, and grub out the root mass so the ground is genuinely clear, not just mowed flat. Stumps left in place rot, settle, and get in the way of everything that comes after, so we deal with them as part of the job. And we work carefully around the mature trees and features you want to keep.',
      },
      {
        h: 'Handling the debris',
        body: 'Cleared brush, trees, and stumps have to go somewhere. Depending on the property and local rules we haul the debris off-site, chip it, or pile and burn it where that is allowed. We leave the site clean rather than covered in slash piles, so the lot is actually ready for whatever comes next instead of trading an overgrown mess for a debris mess.',
      },
    ],
    points: [
      'Brush, undergrowth, and unwanted trees removed',
      'Stumps ground or pulled and roots grubbed out',
      'Lots from a single yard to multi-acre tracts',
      'Cleared to the grade the next step actually needs',
      'Debris hauled off, chipped, or piled and burned where allowed',
      'Careful work around trees and features you want to keep',
    ],
    faqs: [
      {
        q: 'Do you clear small lots or just acreage?',
        a: 'Both. We clear everything from a single overgrown residential lot to multi-acre tracts out in the rural parts of Benton County. Tell us the size and what it is for — a build, a pad, a pasture, or just cleaning it up — and we will scope it to the job.',
      },
      {
        q: 'Do you remove the stumps too, or just cut the trees?',
        a: 'We grub it out properly. Cutting trees and leaving stumps just creates problems later — stumps rot, settle, and get in the way of grading and foundations. We grind or pull stumps and grub out the root mass so the ground is genuinely clear and ready for the next step.',
      },
      {
        q: 'What happens to all the brush and trees you clear?',
        a: 'It depends on the property and the local rules. We haul debris off-site, chip it, or pile and burn it where burning is allowed. Either way we leave the site clean and workable instead of trading an overgrown lot for a yard full of slash piles.',
      },
    ],
    image: landClearingImg,
    imageAlt: 'Excavator clearing brush and trees from a wooded lot in Benton County, Arkansas',
  },
  {
    slug: 'pond-excavation',
    name: 'Pond Excavation',
    short: 'Pond Digging',
    blurb: 'Want a pond on your property? We site, dig, shape, and seal a pond that holds water and fits the land.',
    description:
      'A well-built pond is one of the best improvements you can make to a piece of Northwest Arkansas land — for livestock, irrigation, fishing, fire protection, or just the look of it — but a pond that is dug in the wrong spot or not sealed right never holds water. We design and excavate ponds across Benton County and the surrounding rural areas, from stock ponds and farm ponds out toward Decatur, Gentry, and Gravette to recreational ponds on residential acreage. The work starts with siting: finding a spot where the drainage area feeds it, the soils will hold water, and the dam or berm can be built safely. Then we excavate and shape the basin, build and compact the dam, install the right overflow and outlet so it does not wash out, and key in and seal the bottom — which matters a lot on the rocky, porous Ozark ground where a poorly sealed pond just drains away. Done right, a pond holds for generations; done wrong, it is an expensive hole.',
    sections: [
      {
        h: 'Siting comes first',
        body: 'The most important decision in a pond is where to put it. It needs a drainage area large enough to fill and keep it full, soils that will hold water rather than let it seep away, and a place where a dam or berm can be built on solid ground. We read the land and the watershed before any digging starts, because a pond sited wrong will never hold no matter how well it is dug. On the rocky Ozark terrain here, finding the right spot and the right soils is half the battle.',
      },
      {
        h: 'Building a pond that holds',
        body: 'Once it is sited, we excavate and shape the basin to the depth and slope it needs, build the dam in compacted lifts so it is stable and does not leak, and key the dam into solid ground so water cannot travel under it. The bottom and dam are sealed — often with on-site clay where it exists — so the water stays in. On porous or rocky ground we take extra care with sealing, because that is where most failed ponds go wrong.',
      },
      {
        h: 'Overflow, outlet, and the long game',
        body: 'A pond has to handle a heavy rain without washing out, so we build a proper spillway or overflow and an outlet sized for the watershed, so excess water leaves safely instead of overtopping and cutting the dam. We shape the banks for stability and for whatever you want to use the pond for — livestock access, fishing, or just looks. Built this way, a pond is a permanent improvement to the property, not a maintenance headache.',
      },
    ],
    points: [
      'Pond siting based on watershed, soils, and dam location',
      'Basin excavated and shaped to the right depth and slope',
      'Dam built in compacted lifts and keyed into solid ground',
      'Bottom and dam sealed to hold water on porous ground',
      'Spillway and outlet sized so it does not wash out',
      'Stock, farm, irrigation, and recreational ponds',
    ],
    faqs: [
      {
        q: 'How do I know if my property is a good spot for a pond?',
        a: 'It comes down to three things: a drainage area big enough to fill and feed it, soils that will hold water, and a place to build a stable dam. We come read the land and the watershed before any digging — siting is the most important decision in a pond, and getting it wrong is why some ponds never hold water.',
      },
      {
        q: 'Will a pond hold water in rocky Ozark ground?',
        a: 'It can, but sealing is critical here. Rocky, porous ground lets water seep away if the bottom and dam are not sealed properly. Where on-site clay exists we use it; where it does not, there are other sealing methods. The key is siting the pond on the right soils in the first place and then sealing it correctly.',
      },
      {
        q: 'What keeps a pond from washing out in a big rain?',
        a: 'A properly built spillway and outlet sized for the watershed. The overflow lets a heavy rain leave the pond safely instead of overtopping and cutting through the dam. We build the dam in compacted lifts, key it into solid ground, and size the spillway so the pond handles the storms this area gets.',
      },
    ],
    image: pondExcavationImg,
    imageAlt: 'Excavator digging and shaping a new farm pond on rural acreage in Northwest Arkansas',
  },
  {
    slug: 'dirt-work-hauling',
    name: 'Dirt Work & Hauling',
    short: 'Dirt & Hauling',
    blurb: 'Need fill brought in, spoil hauled off, or material moved? We supply, haul, and place dirt, gravel, and rock.',
    description:
      'A lot of projects come down to moving material — getting fill dirt, gravel, or rock onto a site, hauling excess spoil and debris off of it, or both. We handle dirt work and hauling across Benton County for homeowners, builders, and contractors. We bring in clean fill, topsoil, gravel, and crushed rock and place it where it is needed, and we haul off the excess soil, rock, and debris that grading and excavation generate. Whether it is raising a low spot, backfilling around a foundation, building up a pad, topping a driveway, or clearing a site of spoil, we have the trucks and the loaders to move it. With all the construction across Northwest Arkansas, coordinating material — the right amount, to the right spot, on the right day — keeps a project moving, and that is a big part of what we do alongside the digging. Tell us what you need moved, in or out, and we will handle the hauling and placement.',
    sections: [
      {
        h: 'Material in, spoil out',
        body: 'Most dirt jobs go two directions: material has to come in, and excess has to go out. We supply and haul in clean fill, topsoil, gravel, and crushed rock, and we haul off the spoil, rock, and debris that clearing, grading, and excavation produce. Doing both with one crew means you are not coordinating a separate hauler against the dig — the material shows up and the spoil leaves on the same schedule as the work.',
      },
      {
        h: 'Placing it where it works',
        body: 'Hauling is only half the job — the material has to go where it does the most good. We place and spread fill to raise low spots and build pads, backfill around foundations and structures, top driveways with the right rock, and grade in topsoil for a yard. Because we run the loaders and the grading equipment too, the material gets placed and worked in, not just dumped in a pile for someone else to deal with.',
      },
      {
        h: 'Keeping a busy project supplied',
        body: 'On the busy job sites all over Benton County, material logistics can make or break a schedule. We coordinate the right amount of the right material to the right spot on the day it is needed, and keep spoil moving off the site so it does not pile up and get in the way. For builders and contractors, that reliable in-and-out hauling is often as valuable as the digging itself.',
      },
    ],
    points: [
      'Clean fill, topsoil, gravel, and crushed rock supplied and hauled in',
      'Excess soil, rock, and debris hauled off-site',
      'Fill placed and spread to raise grade and build pads',
      'Backfill around foundations and structures',
      'Driveway rock and topsoil delivered and worked in',
      'Material logistics coordinated to keep a project on schedule',
    ],
    faqs: [
      {
        q: 'Can you bring in fill dirt or gravel for my project?',
        a: 'Yes. We supply and haul in clean fill, topsoil, gravel, and crushed rock, and place it where it is needed — raising a low spot, building a pad, backfilling, or topping a driveway. Tell us roughly how much and what for, and we will get the right material to the right spot.',
      },
      {
        q: 'Do you haul away the dirt and debris from a job?',
        a: 'Yes. Grading and excavation generate spoil, rock, and debris, and we haul it off-site so it does not pile up. We can do the hauling as part of a larger dig or as a standalone job if you have material that needs to be removed.',
      },
      {
        q: 'Do you just dump material, or place it too?',
        a: 'We place it. Because we run the loaders and grading equipment, we spread and work the material in where it belongs — building up a pad, backfilling, grading in topsoil, or topping a drive — rather than leaving you a pile to deal with. Hauling and placement are one job for us.',
      },
    ],
    image: dirtWorkHaulingImg,
    imageAlt: 'Dump truck and loader hauling and placing fill dirt at a job site in Benton County, Arkansas',
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
