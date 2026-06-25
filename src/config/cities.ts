/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'bentonville',
    name: 'Bentonville',
    state: 'AR',
    intro:
      'Bentonville is the seat of Benton County and the heart of one of the fastest-growing areas in the country, with new subdivisions, builder lots, and commercial sites going up on the rolling Ozark ground all around town. That growth is most of what keeps our equipment busy. New homes are being built on lots that fight steep grades and shallow rock, and a lot of the established neighborhoods around downtown and out toward the trails and the airport need drainage fixed, driveways rebuilt, and yards regraded as the area fills in. We do site preparation and building pads for builders and GCs working the Bentonville boom, grading and drainage for homeowners whose new lots shed water the wrong way, gravel driveways, land clearing, and dirt hauling all over the area. Bentonville’s ground is classic Northwest Arkansas — rocky, sloped, and quick to send runoff onto the lot below — so the dirt work has to account for rock and water from the start. Tell us what your project is, whether it is a pad on a builder’s schedule or a yard that finally needs to drain, and we will come walk it and give you a real number.',
    neighborhoods: ['Downtown Bentonville', 'Centerton Road corridor', 'Cooper', 'Tiger Boulevard area', 'Southwest Bentonville'],
    landmarks: ['Crystal Bridges Museum', 'Downtown Square', 'Slaughter Pen trails', 'Northwest Arkansas National Airport (XNA) area'],
    issues: [
      {
        title: 'Explosive growth and builder site prep',
        body: 'Bentonville is building faster than almost anywhere, and the dirt work is the first domino on every new lot. We clear, cut, fill, and pad building sites on a builder’s schedule so foundation crews can start on time — and we know the rocky, sloped ground around town drives the cost more than the square footage does.',
      },
      {
        title: 'New lots that shed water onto the next one',
        body: 'A lot of new Bentonville subdivisions are graded to move water off the lot fast, which often means straight onto the property below. We intercept and redirect that runoff with grading, swales, and drains, and route it to a safe outlet so a new homeowner is not taking on the neighborhood’s water.',
      },
      {
        title: 'Rocky ground over shallow limestone',
        body: 'The Ozark ground around Bentonville is rocky and often sits on shallow rock, which makes grading, pads, and driveways more work than they look. We bring machines built for rock and plan the cut and fill so a tough lot still ends up with a stable, well-draining site.',
      },
    ],
    nearby: ['rogers', 'centerton', 'bella-vista'],
    faqs: [
      {
        q: 'Do you do builder site prep around Bentonville?',
        a: 'Yes — it is a big part of our work here. We clear, grade, cut, fill, and build compacted pads on a builder’s schedule so the foundation crew can start on time. We coordinate up front because the dirt work is what the rest of the project waits on, and we know how Bentonville’s rocky, sloped lots affect the job.',
      },
      {
        q: 'My new Bentonville lot floods part of the yard — can you fix the grade?',
        a: 'Usually, yes. New subdivision lots are often graded flat or pitched the wrong way, so water ponds or runs toward the house. We regrade to establish a positive slope and, where needed, add drainage to a safe outlet. We walk the lot, read where the water goes, and fix it at the source.',
      },
      {
        q: 'How much does excavation cost on a rocky Bentonville lot?',
        a: 'It depends on the rock, the slope, and the access more than anything, which is why we come walk the site before quoting. Shallow limestone and steep grades both add work. We will tell you straight what the ground is going to take and give you a real number up front instead of a sight-unseen guess.',
      },
    ],
  },
  {
    slug: 'rogers',
    name: 'Rogers',
    state: 'AR',
    intro:
      'Rogers sits just east of Bentonville and shares in the same explosive Northwest Arkansas growth, stretching from the historic downtown out to the Pinnacle Hills retail district and up toward Beaver Lake. New residential and commercial construction is everywhere, and so is the dirt work that comes with it. We do site preparation and building pads for the builders and contractors working Rogers, plus grading, drainage, driveways, land clearing, ponds, and hauling for homeowners across the area. The lots around Rogers run from rolling subdivision ground to steeper, rockier parcels up toward Beaver Lake and the eastern edge of town, and a lot of our calls come from drainage problems where new construction has changed how water moves across an area, or from older properties whose grade has never drained right. The ground here is the same rocky Ozark soil that makes every NWA dirt job its own thing — slope, shallow rock, and runoff all have to be planned for. Tell us about your project and we will come out, read the lot, and quote it straight.',
    neighborhoods: ['Downtown Rogers', 'Pinnacle Hills', 'Pleasant Grove', 'New Hope', 'Prairie Creek'],
    landmarks: ['Beaver Lake', 'Pinnacle Hills Promenade', 'War Eagle Mill', 'Lake Atalanta'],
    issues: [
      {
        title: 'Construction changing how water moves',
        body: 'Rogers is building fast, and new development upstream often changes how runoff moves across nearby properties — leaving a yard or driveway suddenly taking on water it never did before. We diagnose where the water is now coming from and intercept and redirect it so your property stops flooding from someone else’s grading.',
      },
      {
        title: 'Steeper, rockier lots toward Beaver Lake',
        body: 'The ground east of Rogers and up toward Beaver Lake gets steeper and rockier, which makes driveways, pads, and grading more demanding. We bring equipment for rock and slope and build driveways and sites that handle the grade instead of washing out the first heavy spring rain.',
      },
      {
        title: 'Drainage and grading on older properties',
        body: 'Plenty of established Rogers properties were never graded to drain well, and the problem only shows up after a wet stretch. We regrade for positive slope and add the right drainage — swales, French drains, culverts — to get water off the lot and away from the foundation.',
      },
    ],
    nearby: ['bentonville', 'lowell', 'cave-springs'],
    faqs: [
      {
        q: 'Do you cover all of Rogers and the Beaver Lake area?',
        a: 'Yes. We work all over Rogers — from downtown and Pinnacle Hills out to Prairie Creek and up toward Beaver Lake — for both homeowners and builders. The lake-area lots tend to be steeper and rockier, and we come prepared for that. Tell us where the property is and we will confirm and come walk it.',
      },
      {
        q: 'A new development upstream is flooding my property — can you help?',
        a: 'Yes, and it is a common call in a fast-growing area like Rogers. New construction changes how runoff moves, and a property downhill can suddenly take on water. We find where it is now entering, intercept and redirect it with grading and drainage, and route it to a safe outlet.',
      },
      {
        q: 'Can you build a driveway on a steep Rogers lot near the lake?',
        a: 'Yes. Steeper, rockier lots are common toward Beaver Lake, and the slope is exactly why the base and drainage matter. We grade the drive to shed water, set culverts where runoff crosses, and build a base heavy enough to hold up so the drive does not wash out or rut.',
      },
    ],
  },
  {
    slug: 'bella-vista',
    name: 'Bella Vista',
    state: 'AR',
    intro:
      'Bella Vista sits in the hills at the northern edge of Benton County, a community built across some of the steepest, most wooded ground in the area, with lakes, golf courses, and homes tucked into the ridges and hollows. That terrain makes Bella Vista one of the more challenging — and interesting — places we do dirt work. Lots are steep, heavily treed, and rocky, and a lot of the building going on here is infill on tough parcels that need real clearing, careful grading, and serious attention to drainage before anything else can happen. We clear lots, prep and pad building sites, build and rebuild driveways on steep approaches, fix drainage and erosion on hillside lots, and haul material in and out across Bella Vista. The combination of slope, trees, and rock means water moves fast here and erosion is a constant concern, so grading and drainage have to be planned together. If you are building on a wooded Bella Vista lot, fighting a driveway that washes, or dealing with runoff coming down the hill, tell us about it and we will come look at the grade and give you a straight answer.',
    neighborhoods: ['Town Center', 'Highlands', 'Metfield', 'Branchwood', 'Kingsdale'],
    landmarks: ['Lake Bella Vista', 'Lake Ann', 'Bella Vista golf courses', 'Tanyard Creek Nature Trail'],
    issues: [
      {
        title: 'Steep, wooded, rocky lots',
        body: 'Bella Vista is built on some of the steepest ground in Benton County, and lots are heavily treed and rocky. Building here means real clearing, careful cut-and-fill grading, and equipment that can hold a line on a slope — it is not flat-lot work, and we come prepared for the terrain.',
      },
      {
        title: 'Hillside erosion and fast runoff',
        body: 'On Bella Vista’s slopes, water moves fast and erosion is a constant problem — washing out driveways, cutting channels, and undermining yards. We plan grading and drainage together, using swales, culverts, and proper slope to control the runoff before it carves up a hillside lot.',
      },
      {
        title: 'Driveways on steep approaches',
        body: 'Many Bella Vista driveways climb or drop a steep grade, which makes them prone to washing out without the right base and drainage. We crown the surface, set culverts where water crosses, and build a base that holds so the drive sheds water instead of becoming a channel for it.',
      },
    ],
    nearby: ['bentonville', 'centerton', 'pea-ridge'],
    faqs: [
      {
        q: 'Can you do excavation on a steep, wooded Bella Vista lot?',
        a: 'Yes — steep, treed, rocky lots are normal in Bella Vista and a lot of what we do here. We clear carefully, grade with cut and fill, and bring equipment that can work a slope. Building on this terrain takes clearing and grading done right before anything else, and we are set up for it.',
      },
      {
        q: 'My driveway keeps washing out on the hill — can you fix it?',
        a: 'Yes. Steep Bella Vista driveways wash out when there is no real base and no plan for water. We rebuild with a compacted base, crown the surface so water sheds to the sides, and set culverts where runoff crosses, so the drive stays put instead of channeling the runoff down it.',
      },
      {
        q: 'Water and erosion are coming down the hill onto my lot — what can you do?',
        a: 'On Bella Vista’s slopes that is common, and it is fixable. We read where the water is coming from, then control it with grading, swales, and culverts to slow and redirect the runoff and get it to a safe outlet before it erodes the lot further. Grade and drainage have to be solved together here.',
      },
    ],
  },
  {
    slug: 'centerton',
    name: 'Centerton',
    state: 'AR',
    intro:
      'Centerton sits just west of Bentonville and has been one of the fastest-growing towns in Benton County, turning farmland and open ground into subdivisions almost overnight. That rapid build-out is most of what brings us to Centerton. New residential construction means a steady need for site prep, building pads, grading, and driveways, and the speed of the growth means a lot of drainage problems as new lots and new streets change how water moves across what used to be open fields. We do builder and GC site preparation, grading and leveling, gravel driveways, drainage systems, land clearing, and hauling throughout the Centerton area. The ground here is a mix of the flatter former farmland and the rockier rolling Ozark soil typical of the county, and on the newer subdivisions the most common calls are about water — lots that pond, yards that drain the wrong way, and runoff between adjacent properties. Whether you are a builder needing pads ready on schedule or a homeowner whose new yard will not drain, tell us about the project and we will come walk it and quote it straight.',
    neighborhoods: ['Downtown Centerton', 'Greens at Centerton', 'Seba Town', 'Brchwood', 'Vaughn area'],
    landmarks: ['Centerton city parks', 'Bentonville West area', 'former farmland subdivisions', 'Highway 102 corridor'],
    issues: [
      {
        title: 'Farmland turning into subdivisions',
        body: 'Centerton is converting open farmland into neighborhoods fast, and that changes how water moves across ground that used to soak it up. New lots and streets concentrate runoff, so drainage and grading problems show up quickly. We grade for positive slope and add drainage to handle the water the new development creates.',
      },
      {
        title: 'High demand for builder pads',
        body: 'With so much residential construction, builders in Centerton need lots cleared, graded, and padded on schedule. We do the site prep that the rest of the build waits on — clearing, cut and fill, and compacted pads — and coordinate up front so the foundation crew can start on time.',
      },
      {
        title: 'New-yard drainage problems',
        body: 'A lot of new Centerton homes end up with a yard that ponds or sheds water toward the house because the lot was graded for the build, not for drainage. We regrade for slope and add surface or French drains where needed so the yard finally drains and the foundation stays dry.',
      },
    ],
    nearby: ['bentonville', 'bella-vista', 'gravette'],
    faqs: [
      {
        q: 'Do you do site prep for builders in Centerton?',
        a: 'Yes — Centerton’s growth means a lot of our work here is builder site prep. We clear, grade, cut and fill, and build compacted pads on schedule so the foundation crew can start on time. We coordinate up front because the dirt work is what the rest of the project waits on.',
      },
      {
        q: 'My new Centerton yard holds water — can you fix the grade?',
        a: 'Usually, yes. New lots are often graded for the build rather than for drainage, so the yard ponds or pitches toward the house. We regrade to establish a positive slope away from the home and add drainage to a safe outlet where it is needed. We walk it first to see where the water goes.',
      },
      {
        q: 'Centerton used to be farmland — does that affect drainage?',
        a: 'It does. Ground that used to be open farmland soaked up rain on its own; once it is built into subdivisions with streets and roofs, that water gets concentrated and has to go somewhere. We grade and add drainage to handle the new runoff so it does not pond or flood downhill properties.',
      },
    ],
  },
  {
    slug: 'cave-springs',
    name: 'Cave Springs',
    state: 'AR',
    intro:
      'Cave Springs sits in southern Benton County between Bentonville, Rogers, and the Springdale line, and it has grown quickly as the metro has filled in around it. It is known for its springs and the sensitive watershed they feed, which makes thoughtful grading and drainage especially important here — water has to be managed carefully, not just shoved off the lot. We do site preparation, grading, driveways, drainage, land clearing, and hauling throughout Cave Springs. The local mix runs from new subdivision construction on the growing edges of town to established rural properties on the rolling ground around the springs and creeks. A lot of our calls here involve managing runoff and erosion in a way that protects the property without dumping problems downstream, plus the usual building-boom demand for pads and driveways. The ground is the rocky, spring-fed Ozark terrain typical of the area, where water is never far below the surface. Tell us about your project — a pad, a driveway, a drainage fix, or clearing — and we will come read the lot and give you a real number.',
    neighborhoods: ['Downtown Cave Springs', 'Lake Keith area', 'Heritage area', 'Pleasant Hill Road corridor', 'Brush Creek area'],
    landmarks: ['Cave Springs cave and spring', 'Lake Keith', 'Osage Creek', 'Cave Springs Nature Preserve'],
    issues: [
      {
        title: 'A sensitive, spring-fed watershed',
        body: 'Cave Springs sits over a sensitive watershed, so runoff and erosion have to be handled carefully — not just pushed off the lot to become someone else’s problem downstream. We grade and drain with that in mind, controlling water on the property and routing it to safe outlets that protect the creeks and springs.',
      },
      {
        title: 'High water and wet ground',
        body: 'With springs and creeks close to the surface, parts of Cave Springs stay wet and have a high water table, which is hard on yards, foundations, and drain systems. We diagnose where the water is coming from and use the right drainage — French drains, swales, regrading — to keep it under control.',
      },
      {
        title: 'New construction on the growing edge',
        body: 'As the metro fills in around Cave Springs, new homes are going up on the rolling ground at the edges of town. Those lots need clearing, grading, pads, and driveways, and they need drainage planned in from the start so the new build does not flood or erode.',
      },
    ],
    nearby: ['rogers', 'lowell', 'centerton'],
    faqs: [
      {
        q: 'Do you handle drainage carefully around the Cave Springs watershed?',
        a: 'Yes. Cave Springs sits over a sensitive, spring-fed watershed, so we control runoff on the property and route it to safe outlets rather than just pushing it downstream. We plan grading and drainage together to protect the lot and the creeks and springs at the same time.',
      },
      {
        q: 'My Cave Springs lot stays wet — what can you do?',
        a: 'With springs and creeks close to the surface, wet ground and a high water table are common here. We diagnose where the water is coming from — surface runoff, a high table, or grading — and use the right mix of regrading and subsurface drainage to get it under control and keep it off the foundation.',
      },
      {
        q: 'Can you prep a new building lot in Cave Springs?',
        a: 'Yes. We clear, grade, cut and fill, and build compacted pads for new construction on the growing edges of Cave Springs, and we plan the drainage in from the start so the finished site drains properly. Tell us about the lot and we will come walk it before quoting.',
      },
    ],
  },
  {
    slug: 'lowell',
    name: 'Lowell',
    state: 'AR',
    intro:
      'Lowell sits along the I-49 corridor between Rogers and Springdale in southern Benton County, a town that has grown alongside the logistics and trucking industry centered here and the broader Northwest Arkansas building boom. It is a mix of commercial and industrial development along the highway and residential growth filling in around it. We do site preparation, grading, driveways, drainage, land clearing, and hauling throughout Lowell for builders, contractors, and homeowners. The flatter ground near the corridor and the rolling Ozark soil away from it both bring their own drainage challenges, and with the steady commercial and residential construction here, a lot of our work is pads and site prep on a schedule, plus drainage fixes where new building has changed how water moves. The growth is fast and the dirt work is constant. Whether it is a building pad, a commercial site, a driveway, or a drainage problem on a Lowell property, tell us what you need and we will come walk it and quote it straight.',
    neighborhoods: ['Downtown Lowell', 'I-49 corridor', 'Apple Blossom area', 'Bellview Road corridor', 'Monroe Avenue area'],
    landmarks: ['I-49 corridor', 'J.B. Hunt headquarters area', 'Lowell city park', 'Puppy Creek'],
    issues: [
      {
        title: 'Commercial and industrial site work',
        body: 'Lowell’s position on the I-49 corridor draws a lot of commercial and industrial construction, which needs heavy site prep — clearing, large cut and fill, compacted pads, and roughed-in drainage and access. We do that work on a contractor’s schedule and coordinate so the project keeps moving.',
      },
      {
        title: 'Drainage where building changed the runoff',
        body: 'Steady construction in and around Lowell has changed how water moves across a lot of properties, leaving some yards and lots taking on runoff they never did. We diagnose where the water now comes from and intercept and redirect it with grading and drainage to a safe outlet.',
      },
      {
        title: 'Mixed flat and rolling ground',
        body: 'Lowell has flatter ground near the corridor and rolling Ozark soil away from it, and each drains differently. Flat ground ponds without proper slope; rolling ground sheds runoff fast. We grade and drain each for what it is so the finished site handles water the right way.',
      },
    ],
    nearby: ['rogers', 'cave-springs', 'siloam-springs'],
    faqs: [
      {
        q: 'Do you do commercial site prep in Lowell?',
        a: 'Yes. Lowell’s I-49 corridor draws a lot of commercial and industrial work, and we handle the heavy site prep it needs — clearing, large cut and fill, compacted pads, and roughed-in drainage and access — on a contractor’s schedule. Tell us about the site and we will come walk it.',
      },
      {
        q: 'My Lowell property started flooding after nearby construction — can you fix it?',
        a: 'Yes. New building changes how runoff moves, and a property can suddenly take on water it never did. We find where it is now entering, intercept and redirect it with grading and drainage, and route it to a safe outlet so your lot stops flooding from the change upstream.',
      },
      {
        q: 'Do you do residential work in Lowell too, or just commercial?',
        a: 'Both. Alongside the commercial site prep along the corridor, we do plenty of residential grading, driveways, drainage, and clearing for homeowners in the neighborhoods filling in around Lowell. Tell us what the project is and we will scope it to the job.',
      },
    ],
  },
  {
    slug: 'pea-ridge',
    name: 'Pea Ridge',
    state: 'AR',
    intro:
      'Pea Ridge sits in the rolling hills of northeastern Benton County, a smaller town with a rural character that is now feeling the spillover of the Northwest Arkansas growth as people look for land and homes a little farther out from Bentonville and Rogers. That makes for a good mix of work: rural acreage projects and new homes on larger lots, alongside the in-town growth. We do land clearing, site preparation, grading, gravel driveways, drainage, pond excavation, and hauling throughout the Pea Ridge area. A lot of our calls here are the rural kind — clearing a wooded lot to build, putting in a long driveway, digging a stock or recreational pond, or grading acreage for a barn or shop — plus the drainage and pad work that comes with new construction. The ground is rocky, rolling Ozark soil, and the larger lots mean real driveways and real drainage planning. If you are building on Pea Ridge acreage, need a pond dug, or have a driveway or drainage problem, tell us about it and we will come out, read the land, and give you a real number.',
    neighborhoods: ['Downtown Pea Ridge', 'Patton Cemetery Road area', 'Lee Town', 'Twelve Corners area', 'Brush Creek Road corridor'],
    landmarks: ['Pea Ridge National Military Park', 'Big Sugar Creek', 'rural Benton County acreage', 'Patton Cemetery'],
    issues: [
      {
        title: 'Rural acreage and longer driveways',
        body: 'Pea Ridge has more rural, larger lots than the metro core, which means real driveways — long gravel drives that need a proper base, crown, and culverts to keep from washing out. We build and rebuild rural driveways that handle trucks, equipment, and the runoff a long drive collects.',
      },
      {
        title: 'Clearing wooded lots to build',
        body: 'A lot of building around Pea Ridge starts with clearing a wooded or brushy lot. We clear and grub the ground, deal with the stumps and debris, and leave it ready for grading and a pad — clearing with the next step in mind so the project rolls straight into site prep.',
      },
      {
        title: 'Ponds and acreage grading',
        body: 'On rural Pea Ridge land, stock and recreational ponds and grading for barns, shops, and pastures are common projects. We site and dig ponds that hold water on the rocky ground, and grade acreage for whatever the land is going to be used for.',
      },
    ],
    nearby: ['bentonville', 'garfield', 'bella-vista'],
    faqs: [
      {
        q: 'Can you build a long gravel driveway on rural Pea Ridge land?',
        a: 'Yes — long rural drives are a lot of what we do around Pea Ridge. The length and the runoff are exactly why the base and drainage matter. We grade the drive to shed water, set culverts where ditches cross, and build a base heavy enough for the trucks and equipment a rural drive sees.',
      },
      {
        q: 'I want to dig a pond on my Pea Ridge property — can you do that?',
        a: 'Yes. We site, dig, shape, and seal stock and recreational ponds on rural acreage. Siting comes first — the pond needs a good drainage area, soils that hold water, and a place for a stable dam — and on the rocky Ozark ground here, proper sealing is critical. We read the land before any digging starts.',
      },
      {
        q: 'Do you clear lots for building around Pea Ridge?',
        a: 'Yes. We clear and grub wooded and brushy lots, remove stumps and debris, and leave the ground ready for grading and a pad. Since clearing is usually the first step in a build, we clear with the next step in mind and can roll straight into site prep with the same crew.',
      },
    ],
  },
  {
    slug: 'siloam-springs',
    name: 'Siloam Springs',
    state: 'AR',
    intro:
      'Siloam Springs sits on the western edge of Benton County right at the Oklahoma line, a town with a historic downtown, a college, and a good deal of rural and agricultural land around it. It is a bit removed from the Bentonville–Rogers core, with its own steady growth and a more rural, working character. We do land clearing, site preparation, grading, driveways, drainage, pond excavation, and hauling throughout the Siloam Springs area. The mix here leans toward rural and agricultural projects — clearing and grading farm and pasture land, digging stock ponds, building long driveways, and prepping building sites on acreage — alongside the residential and commercial growth in and around town. The ground is the rocky, rolling Ozark soil common to the region, with creek bottoms and farmland adding their own grading and drainage needs. Whether you are clearing land, digging a pond, building a driveway, or prepping a site near Siloam Springs, tell us about the project and we will come read the ground and quote it straight.',
    neighborhoods: ['Downtown Siloam Springs', 'Highway 412 corridor', 'Twin Springs area', 'Lake Frances area', 'rural west Benton County'],
    landmarks: ['Historic downtown', 'John Brown University', 'Sager Creek', 'Lake Frances'],
    issues: [
      {
        title: 'Rural and agricultural site work',
        body: 'Siloam Springs has a lot of farm, pasture, and rural acreage, and much of our work here is agricultural — clearing and grading land, digging stock ponds, and building access. We work the larger rural projects that the metro core sees less of, with equipment sized for acreage.',
      },
      {
        title: 'Stock and farm ponds',
        body: 'On the farmland and acreage around Siloam Springs, stock and irrigation ponds are common. We site them where the watershed and soils will hold water, dig and shape the basin, build and seal the dam, and size the spillway so the pond holds for the long haul on rocky ground.',
      },
      {
        title: 'Creek-bottom and farmland drainage',
        body: 'The creek bottoms and farmland around Siloam Springs have their own drainage needs — wet ground, slow-draining soils, and runoff across open land. We grade and drain to move water where it should go, protecting fields, building sites, and access from standing water and erosion.',
      },
    ],
    nearby: ['gentry', 'gravette', 'decatur'],
    faqs: [
      {
        q: 'Do you do agricultural and rural site work near Siloam Springs?',
        a: 'Yes — a lot of our work around Siloam Springs is rural and agricultural: clearing and grading farm and pasture land, digging stock ponds, building access drives, and prepping building sites on acreage. We have the equipment for larger rural projects. Tell us about the land and we will come read it.',
      },
      {
        q: 'Can you dig a stock pond on my farmland?',
        a: 'Yes. We site, dig, shape, and seal stock, irrigation, and recreational ponds on farmland and acreage. The siting comes first — a good drainage area, soils that hold water, and a stable dam location — and we seal carefully for the rocky ground so the pond actually holds water.',
      },
      {
        q: 'My field or building site holds water — can you grade it to drain?',
        a: 'Yes. The creek bottoms and farmland around Siloam Springs often have wet, slow-draining ground. We grade for positive slope and add ditches, swales, or drains as needed to move the water where it should go, so fields, sites, and access stay usable instead of staying soggy.',
      },
    ],
  },
  {
    slug: 'gravette',
    name: 'Gravette',
    state: 'AR',
    intro:
      'Gravette sits in the rural northwestern corner of Benton County, a small town surrounded by farmland, pasture, and wooded acreage, far enough from the Bentonville–Rogers core to keep a genuinely rural character even as growth pushes outward. That makes Gravette good country for the kind of dirt work that needs room — clearing acreage, digging ponds, building long driveways, and grading land for homes, barns, and pastures. We do land clearing, site preparation, grading, gravel driveways, drainage, pond excavation, and hauling throughout the Gravette area. Most of our work here is rural: turning wooded or overgrown acreage into buildable or usable ground, putting in the long driveways rural properties need, and digging stock and recreational ponds on the rolling Ozark land. The ground is rocky and rolling, with the slope and shallow rock that make NWA dirt work its own thing. If you are building on Gravette acreage, clearing land, putting in a driveway, or wanting a pond, tell us about the project and we will come out, read the land, and give you a real number.',
    neighborhoods: ['Downtown Gravette', 'Hiwasse area', 'Pingtown', 'Spavinaw Creek area', 'rural northwest Benton County'],
    landmarks: ['Spavinaw Creek', 'Gravette city parks', 'rural farmland and pasture', 'Old Town Gravette'],
    issues: [
      {
        title: 'Rural acreage projects',
        body: 'Gravette is genuinely rural, and a lot of our work here is acreage — clearing wooded or overgrown land, grading for homes, barns, and pastures, and turning raw ground into something buildable or usable. These are larger projects with room to work, and we bring equipment sized for them.',
      },
      {
        title: 'Long driveways on rural lots',
        body: 'Rural Gravette properties often need long gravel driveways, and length plus runoff is what makes them wash out without the right build. We grade the route to shed water, set culverts where drainage crosses, and lay a base heavy enough for the trucks and equipment a rural drive carries.',
      },
      {
        title: 'Ponds and rocky ground',
        body: 'Stock and recreational ponds are common on the acreage around Gravette, and the rocky Ozark ground makes siting and sealing critical — a pond dug in the wrong spot or sealed poorly never holds. We read the watershed and soils first and seal the basin and dam so the pond holds water.',
      },
    ],
    nearby: ['decatur', 'centerton', 'gentry'],
    faqs: [
      {
        q: 'Do you do rural acreage work around Gravette?',
        a: 'Yes — rural acreage is most of what we do around Gravette. We clear wooded and overgrown land, grade for homes, barns, and pastures, build long driveways, and dig ponds. These are larger projects, and we have the equipment for them. Tell us about the land and we will come read it before quoting.',
      },
      {
        q: 'Can you build a long driveway way out on a Gravette property?',
        a: 'Yes — long rural drives are routine for us out here. The length and the runoff are exactly why the base and drainage matter. We grade the drive to shed water, set culverts where ditches cross, and build a base heavy enough for the trucks and equipment a rural drive sees, so it does not wash out.',
      },
      {
        q: 'Will a pond hold water on rocky Gravette ground?',
        a: 'It can, but siting and sealing are critical. The rocky Ozark ground lets water seep away if the pond is dug in the wrong spot or sealed poorly. We read the watershed and soils first, dig and shape the basin, and seal the bottom and dam — often with on-site clay — so the water stays in.',
      },
    ],
  },
  {
    slug: 'gentry',
    name: 'Gentry',
    state: 'AR',
    intro:
      'Gentry sits in the western part of Benton County near the Oklahoma line, a small, rural, agricultural town surrounded by farmland, pasture, and the wooded acreage typical of this corner of the county. It is poultry and farming country, well removed from the metro core, and the dirt work here matches — rural, agricultural, and practical. We do land clearing, site preparation, grading, gravel driveways, drainage, pond excavation, and hauling throughout the Gentry area. Much of our work is on farms and acreage: clearing and grading land, building pads for barns, shops, and poultry houses, digging stock ponds, putting in long farm driveways, and managing drainage across fields and around buildings. The ground is the rocky, rolling Ozark soil common to the region, with farmland and creek bottoms adding their own grading and drainage needs. If you have an agricultural or rural project around Gentry — clearing, a pad, a pond, a driveway, or a drainage fix — tell us about it and we will come read the land and give you a straight number.',
    neighborhoods: ['Downtown Gentry', 'Highway 12 corridor', 'Flint Creek area', 'rural west Benton County', 'Decatur Road area'],
    landmarks: ['Wild Wilderness Drive-Through Safari', 'Flint Creek', 'Gentry farmland', 'Eagle Watch Nature Trail'],
    issues: [
      {
        title: 'Agricultural and farm site work',
        body: 'Gentry is farm and poultry country, and a lot of our work is agricultural — clearing and grading land, building pads for barns, shops, and poultry houses, and managing drainage around farm buildings. These are practical rural projects, and we bring equipment sized for acreage and farm work.',
      },
      {
        title: 'Pads for barns, shops, and poultry houses',
        body: 'Farm buildings need a properly built, compacted pad just like a house does, or they settle and crack. We build pads for barns, shops, and poultry houses on the rocky ground around Gentry, compacted to spec so the structure sits on stable, load-bearing ground.',
      },
      {
        title: 'Field and farm-building drainage',
        body: 'Drainage on a farm matters — around buildings, across fields, and along access drives. We grade and drain to move water where it should go, keeping farm buildings dry, fields usable, and driveways from washing out on the rolling, rocky Gentry ground.',
      },
    ],
    nearby: ['decatur', 'siloam-springs', 'gravette'],
    faqs: [
      {
        q: 'Do you build pads for barns and poultry houses around Gentry?',
        a: 'Yes. Farm buildings need a properly built, compacted pad or they settle and crack, just like a house. We build pads for barns, shops, and poultry houses on the rocky ground around Gentry, compacted to spec so the structure sits on stable, load-bearing ground. Tell us the footprint and we will scope it.',
      },
      {
        q: 'Can you do agricultural site work on my Gentry farm?',
        a: 'Yes — agricultural and rural work is most of what we do around Gentry. We clear and grade land, build farm-building pads, dig stock ponds, put in farm driveways, and handle drainage around buildings and fields. We have the equipment for acreage and farm projects.',
      },
      {
        q: 'My farm field or building area holds water — can you fix the drainage?',
        a: 'Yes. We grade for positive slope and add ditches, swales, or drains to move water off fields, away from farm buildings, and out of driveways. On the rolling, rocky Gentry ground we read where the water goes first, then fix it at the source so the ground stays usable.',
      },
    ],
  },
  {
    slug: 'decatur',
    name: 'Decatur',
    state: 'AR',
    intro:
      'Decatur sits in the rural western reaches of Benton County, a small farming and poultry town surrounded by acreage, pasture, and wooded ground, well away from the Bentonville–Rogers growth. It is practical, rural country, and the dirt work here is the same — clearing, grading, ponds, driveways, and pads for farm and rural building. We do land clearing, site preparation, grading, gravel driveways, drainage, pond excavation, and hauling throughout the Decatur area. Most of our work is agricultural and rural: clearing and grading farmland and wooded acreage, building pads for barns, shops, and poultry houses, digging stock and recreational ponds, putting in long farm driveways, and handling drainage across fields and around buildings. The ground is rocky, rolling Ozark soil with the slope and shallow rock typical of the county, plus the creek bottoms and farmland that bring their own needs. If you have a rural or agricultural project around Decatur, tell us what it is and we will come read the land and give you a real number — no sight-unseen guesses.',
    neighborhoods: ['Downtown Decatur', 'Highway 59 corridor', 'Columbia Hollow area', 'rural west Benton County', 'Spavinaw Creek area'],
    landmarks: ['Decatur city park', 'Spavinaw Creek', 'Columbia Hollow', 'rural farmland and pasture'],
    issues: [
      {
        title: 'Farm and poultry site work',
        body: 'Decatur is farming and poultry country, and much of our work is agricultural — clearing and grading land, building pads for barns, shops, and poultry houses, and handling drainage around farm buildings. These are practical rural projects, and we bring the right equipment for acreage and farm work.',
      },
      {
        title: 'Ponds on rural acreage',
        body: 'Stock and recreational ponds are common on the farmland and acreage around Decatur. We site them where the watershed and soils will hold water, dig and shape the basin, build and seal the dam, and size the spillway so the pond holds water on the rocky ground here.',
      },
      {
        title: 'Long farm driveways and access',
        body: 'Rural Decatur properties need long driveways and farm access that hold up to trucks and equipment. We grade the route to shed water, set culverts where drainage crosses, and lay a base heavy enough that the drive does not rut or wash out on the rolling ground.',
      },
    ],
    nearby: ['gentry', 'gravette', 'siloam-springs'],
    faqs: [
      {
        q: 'Do you do farm and agricultural site work around Decatur?',
        a: 'Yes — agricultural and rural work is most of what we do around Decatur. We clear and grade land, build pads for barns, shops, and poultry houses, dig ponds, put in farm driveways, and handle drainage around buildings and fields. We have the equipment for acreage and farm projects.',
      },
      {
        q: 'Can you dig a pond on my Decatur acreage?',
        a: 'Yes. We site, dig, shape, and seal stock and recreational ponds on farmland and acreage. Siting comes first — a good drainage area, soils that hold water, and a stable dam location — and on the rocky ground here we seal carefully so the pond actually holds water for the long haul.',
      },
      {
        q: 'I need a long driveway built on my rural Decatur property — can you do it?',
        a: 'Yes. Long rural drives are routine for us. The length and the runoff are why the base and drainage matter: we grade the drive to shed water, set culverts where ditches cross, and build a base heavy enough for the trucks and equipment a farm drive carries so it does not wash out.',
      },
    ],
  },
  {
    slug: 'garfield',
    name: 'Garfield',
    state: 'AR',
    intro:
      'Garfield sits in the northeastern corner of Benton County near Beaver Lake and the Missouri line, a small rural community surrounded by wooded hills, lake-area properties, and acreage. The combination of lake country and rural Ozark ground makes Garfield a place where dirt work means dealing with slope, trees, rock, and water all at once. We do land clearing, site preparation, grading, gravel driveways, drainage, pond excavation, and hauling throughout the Garfield area. A lot of our work here is on wooded and sloped lots — clearing to build, grading steep ground, putting in driveways that climb or drop a grade, and controlling the erosion and runoff that come with slope and lake-area terrain — plus rural acreage projects and ponds. The ground is rocky, hilly, and heavily treed in places, with the steep grades common near the lake. If you are building on a Garfield lot, fighting a washed-out driveway, dealing with hillside runoff, or want a pond on your acreage, tell us about it and we will come read the land and quote it straight.',
    neighborhoods: ['Downtown Garfield', 'Beaver Lake area', 'Gateway area', 'Highway 62 corridor', 'rural northeast Benton County'],
    landmarks: ['Beaver Lake', 'Hobbs State Park', 'Pea Ridge National Military Park area', 'War Eagle area'],
    issues: [
      {
        title: 'Steep, wooded lake-area lots',
        body: 'Garfield’s lots near Beaver Lake are often steep, rocky, and heavily treed, which makes building a real job. We clear carefully, grade with cut and fill on the slope, and bring equipment that can hold a line on steep ground — this is not flat-lot work, and we come prepared for the terrain.',
      },
      {
        title: 'Hillside erosion and runoff',
        body: 'On the slopes around Garfield and the lake, water moves fast and erosion is a constant concern — washing out driveways and cutting channels across yards. We plan grading and drainage together, using swales, culverts, and proper slope to control runoff before it carves up a hillside lot.',
      },
      {
        title: 'Driveways on steep grades',
        body: 'Garfield driveways often climb or drop a steep grade and wash out without the right build. We crown the surface, set culverts where water crosses, and lay a base that holds so the drive sheds water to the sides instead of becoming a channel that ruts and erodes.',
      },
    ],
    nearby: ['pea-ridge', 'bentonville', 'rogers'],
    faqs: [
      {
        q: 'Can you do excavation on a steep, wooded lot near Beaver Lake?',
        a: 'Yes — steep, treed, rocky lake-area lots are common around Garfield and a lot of what we do here. We clear carefully, grade with cut and fill, and bring equipment that can work a slope. Building on this terrain takes clearing and grading done right first, and we are set up for it.',
      },
      {
        q: 'My Garfield driveway keeps washing out on the hill — can you fix it?',
        a: 'Yes. Steep driveways wash out when there is no real base and no plan for water. We rebuild with a compacted base, crown the surface so water sheds to the sides, and set culverts where runoff crosses, so the drive stays put instead of channeling the runoff down it.',
      },
      {
        q: 'Hillside runoff and erosion are damaging my lot — what can you do?',
        a: 'On Garfield’s slopes that is common and fixable. We read where the water is coming from, then control it with grading, swales, and culverts to slow and redirect the runoff to a safe outlet before it erodes the lot further. Grade and drainage have to be solved together on slopes like these.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
