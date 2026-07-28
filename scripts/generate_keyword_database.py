import csv
import os

def generate_keywords():
    output_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_path = os.path.join(output_dir, 'keyword_research_database.csv')
    
    # Target URL mappings (current & proposed Next.js routes)
    routes = {
        'home': '/',
        'atelier': '/atelier',
        'gallery': '/gallery',
        'commission': '/commission',
        'studio': '/studio',
        'tools_hub': '/tools',
        'trowels': '/tools/venetian-plaster-trowels',
        'burnishers': '/tools/stainless-steel-burnishers',
        'spatulas': '/tools/japanese-plaster-spatulas',
        'hawks_mixers': '/tools/hawks-and-lime-mixers',
        'plaster_hub': '/products/lime-plaster',
        'grassello': '/products/grassello-di-calce',
        'marmorino': '/products/marmorino-naturale',
        'intonachino': '/products/intonachino-coarse',
        'calce_rasata': '/products/calce-rasata-putty',
        'metallic_hub': '/products/metallic-wall-finishes',
        'metaline': '/products/metaline-bronze-copper',
        'velvet_rust': '/products/velvet-rust-patina',
        'gold_stucco': '/products/gold-leaf-stucco',
        'microcement_hub': '/products/microcement-systems',
        'microcement_floors': '/services/microcement-flooring',
        'microcement_wetrooms': '/services/wetroom-microcement',
        'contractors_b2b': '/services/commercial-venetian-plastering',
        'contractors_b2c': '/services/residential-artisan-plastering',
        'contractors_local': '/services/local-venetian-plaster-applicators',
        'guides_hub': '/guides',
        'guide_application': '/guides/how-to-apply-venetian-plaster',
        'guide_maintenance': '/guides/lime-plaster-care-waxing',
        'guide_microcement': '/guides/microcement-vs-venetian-plaster',
        'guide_costs': '/guides/venetian-plaster-cost-per-sq-ft'
    }

    # 1. High Priority curated entries (exactly 127 high intent opportunities)
    high_priority_entries = []
    
    # Tools High Priority (25)
    tools_high = [
        ("best venetian plaster trowel stainless steel", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['trowels']),
        ("pavan venetian plaster trowel original italy", "High (5k-50k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['trowels']),
        ("japanese trapezoid plastering trowel for burnishing", "Medium (1k-5k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['trowels']),
        ("bevel edge stainless burnishing spatula luxury wall", "Medium (1k-5k)", "Commercial", "Venetian Plaster Tools", routes['spatulas']),
        ("professional plastering hawk and spatula kit", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['hawks_mixers']),
        ("exotic plaster burnishing trowel mirror finish", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['burnishers']),
        ("flexible stainless steel venetian plaster spatula", "Medium (1k-5k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['spatulas']),
        ("buy authentic Italian plastering trowel online", "High (5k-50k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['trowels']),
        ("heavy duty lime plaster paddle mixer", "Medium (1k-5k)", "Commercial", "Venetian Plaster Tools", routes['hawks_mixers']),
        ("venetian plaster blade polisher burnishing tool", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['burnishers']),
        ("stucco venetiano trowel set high grade steel", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['trowels']),
        ("microcement application squeegee trowel", "Medium (1k-5k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['trowels']),
        ("marmorino coarse plastering trowel wooden handle", "Medium (1k-5k)", "Commercial", "Venetian Plaster Tools", routes['trowels']),
        ("corner trowel for Italian lime plaster finish", "Low (100-1k)", "Commercial", "Venetian Plaster Tools", routes['trowels']),
        ("titanium coated plaster burnishing trowel", "Medium (1k-5k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['burnishers']),
        ("magnesium plastering hawk 13 inch heavy duty", "Medium (1k-5k)", "Commercial", "Venetian Plaster Tools", routes['hawks_mixers']),
        ("lime putty finishing trowel ultra smooth blade", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['trowels']),
        ("artisan decorative plastering tools catalog", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['tools_hub']),
        ("marmorino trowel 240mm trapezoidal blade", "Medium (1k-5k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['trowels']),
        ("luxury wall texture applicator tool set", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['tools_hub']),
        ("rounded edge venetian plaster burnishing spatula", "Medium (1k-5k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['spatulas']),
        ("plasterers finishing trowel for lime marmorino", "Medium (1k-5k)", "Commercial", "Venetian Plaster Tools", routes['trowels']),
        ("wax application spatula for polished plaster", "Low (100-1k)", "Transactional/Product-led", "Venetian Plaster Tools", routes['spatulas']),
        ("italian decorative plaster scraper tool", "Low (100-1k)", "Commercial", "Venetian Plaster Tools", routes['spatulas']),
        ("imported venetian plaster trowel supplier USA", "High (5k-50k)", "Commercial", "Venetian Plaster Tools", routes['trowels'])
    ]
    high_priority_entries.extend(tools_high)

    # Italian Lime Plaster High Priority (25)
    lime_high = [
        ("authentic grassello di calce italian lime plaster", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['grassello']),
        ("pit aged slaked lime plaster supplier USA", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("slaked lime putty for traditional venetian plaster", "High (5k-50k)", "Transactional/Product-led", "Italian Lime Plaster", routes['grassello']),
        ("calce rasata natural lime plaster finish", "Medium (1k-5k)", "Commercial", "Italian Lime Plaster", routes['calce_rasata']),
        ("ecological VOC free Italian lime plaster wall finish", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("breathable lime wall plaster for luxury interiors", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("mineral lime plaster manufacturer direct", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("grassello venetian plaster 24kg bucket price", "High (5k-50k)", "Transactional/Product-led", "Italian Lime Plaster", routes['grassello']),
        ("intonachino medium grain lime stucco exterior", "Medium (1k-5k)", "Commercial", "Italian Lime Plaster", routes['intonachino']),
        ("custom tinted lime plaster Italian formula", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("slaked lime paste for historic restoration plaster", "Medium (1k-5k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("high gloss mirror grassello wall plaster", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['grassello']),
        ("natural lime finish stucco for luxury bathrooms", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("lime wall finish mold resistant zero VOC", "Medium (1k-5k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("buy imported Italian lime stucco online", "High (5k-50k)", "Transactional/Product-led", "Italian Lime Plaster", routes['plaster_hub']),
        ("calce lime plaster for architectural feature walls", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("grassello di calce price per gallon", "Medium (1k-5k)", "Transactional/Product-led", "Italian Lime Plaster", routes['grassello']),
        ("traditional Venetian lime plaster supplier California", "High (5k-50k)", "Local B2B", "Italian Lime Plaster", routes['plaster_hub']),
        ("lime base coat plaster intonachino coarse", "Medium (1k-5k)", "Transactional/Product-led", "Italian Lime Plaster", routes['intonachino']),
        ("venetian lime plaster primer substrate prep", "Medium (1k-5k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("slaked lime plaster for residential master bedroom", "Medium (1k-5k)", "Local B2C", "Italian Lime Plaster", routes['plaster_hub']),
        ("pure mineral lime paste stucco decorativo", "Medium (1k-5k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub']),
        ("italian slaked lime wall finish distributor", "High (5k-50k)", "Local B2B", "Italian Lime Plaster", routes['plaster_hub']),
        ("natural hydraulic lime plaster vs slaked lime putty", "Medium (1k-5k)", "Informational", "Italian Lime Plaster", routes['plaster_hub']),
        ("premium Venetian plaster wall finish formula", "High (5k-50k)", "Commercial", "Italian Lime Plaster", routes['plaster_hub'])
    ]
    high_priority_entries.extend(lime_high)

    # Contractors & Applicators High Priority (27)
    contractors_high = [
        ("venetian plaster contractor near me luxury homes", "High (5k-50k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_local']),
        ("commercial venetian plaster installer New York City", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("hire master venetian plaster artisan Miami FL", "High (5k-50k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_local']),
        ("luxury hotel venetian plaster specialist contractor", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("venetian plaster wall installation cost per sq ft", "High (5k-50k)", "Commercial", "Venetian Plaster Contractors", routes['guide_costs']),
        ("licensed plastering contractor polished wall finishes", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("artisan decorative plasterer Los Angeles CA", "High (5k-50k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_local']),
        ("custom marmorino plaster installation service", "High (5k-50k)", "Commercial", "Venetian Plaster Contractors", routes['contractors_b2c']),
        ("venetian plaster feature wall installer luxury condo", "High (5k-50k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_b2c']),
        ("high end commercial interior plastering firm", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("best artisan wall finish studio Chicago", "High (5k-50k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_local']),
        ("venetian plaster contractor quote estimates", "High (5k-50k)", "Commercial", "Venetian Plaster Contractors", routes['commission']),
        ("custom metallic plaster applicator Dallas Texas", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_local']),
        ("seamless microcement contractor London luxury", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['microcement_floors']),
        ("architectural wall finish subcontracting services", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("residential decorative stucco applicator Houston", "Medium (1k-5k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_local']),
        ("venetian plaster fireplace installation expert", "High (5k-50k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_b2c']),
        ("boutique retail store plaster installation contractor", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("master plasterer burnished wall finishes Scottsdale", "Medium (1k-5k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_local']),
        ("venetian plaster ceiling contractor specialized team", "High (5k-50k)", "Commercial", "Venetian Plaster Contractors", routes['contractors_b2c']),
        ("luxury restaurant interior wall plaster installer", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("hand applied Italian stucco specialist near me", "High (5k-50k)", "Local B2C", "Venetian Plaster Contractors", routes['contractors_local']),
        ("microcement bathroom contractor installer Palm Beach", "High (5k-50k)", "Local B2C", "Venetian Plaster Contractors", routes['microcement_wetrooms']),
        ("certified Italian plaster applicator company", "High (5k-50k)", "Commercial", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("bespoke wall plastering commission studio", "High (5k-50k)", "Commercial", "Venetian Plaster Contractors", routes['commission']),
        ("exterior lime plaster facade contractor luxury villa", "High (5k-50k)", "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b']),
        ("high luxury venetian plaster artisan studio USA", "High (5k-50k)", "Commercial", "Venetian Plaster Contractors", routes['studio'])
    ]
    high_priority_entries.extend(contractors_high)

    # Marmorino & Textured High Priority (20)
    marmorino_high = [
        ("marmorino naturale italian plaster wall finish", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("marmorino fine polished marble plaster", "High (5k-50k)", "Transactional/Product-led", "Marmorino & Textured Finishes", routes['marmorino']),
        ("marmorino carrara satin stone wall finish", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("travertine effect marmorino plaster application", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("coarse aggregate marmorino plaster for exterior", "Medium (1k-5k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("custom tinted marmorino plaster color chart", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("marmorino vs venetian plaster key differences", "High (5k-50k)", "Informational", "Marmorino & Textured Finishes", routes['guide_microcement']),
        ("concrete effect marmorino plaster finish walls", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("textured lime plaster marmorino for fireplace", "High (5k-50k)", "Local B2C", "Marmorino & Textured Finishes", routes['marmorino']),
        ("matte stone finish marmorino plaster bucket", "Medium (1k-5k)", "Transactional/Product-led", "Marmorino & Textured Finishes", routes['marmorino']),
        ("marmorino plaster price per square foot", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['guide_costs']),
        ("italian marmorino wall finish for luxury dining room", "Medium (1k-5k)", "Local B2C", "Marmorino & Textured Finishes", routes['marmorino']),
        ("slaked lime marmorino powder mix formula", "Medium (1k-5k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("marmorino stone finish plaster supplier US", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("polished marmorino plaster wax sealer finish", "Medium (1k-5k)", "Commercial", "Marmorino & Textured Finishes", routes['guide_maintenance']),
        ("distressed pitted marmorino stone wall texture", "Medium (1k-5k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("black marmorino plaster feature wall luxury decor", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("natural marmorino stucco zero VOC indoor finish", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino']),
        ("marmorino plaster sample board custom order", "Medium (1k-5k)", "Transactional/Product-led", "Marmorino & Textured Finishes", routes['atelier']),
        ("heavy texture marmorino plaster wall design", "High (5k-50k)", "Commercial", "Marmorino & Textured Finishes", routes['marmorino'])
    ]
    high_priority_entries.extend(marmorino_high)

    # Metallic & Decorative High Priority (15)
    metallic_high = [
        ("metaline bronze metallic wall plaster finish", "High (5k-50k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['metaline']),
        ("velvet rust patina decorative wall finish", "High (5k-50k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['velvet_rust']),
        ("gold leaf venetian plaster feature wall luxury", "High (5k-50k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['gold_stucco']),
        ("copper metaline plaster finish commercial interior", "Medium (1k-5k)", "Local B2B", "Metallic & Decorative Wall Finishes", routes['metaline']),
        ("stucco metallico metallic decorative plaster paste", "High (5k-50k)", "Transactional/Product-led", "Metallic & Decorative Wall Finishes", routes['metallic_hub']),
        ("pearl shimmer venetian plaster glaze", "Medium (1k-5k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['metallic_hub']),
        ("oxidized metal wall plaster finish texture", "High (5k-50k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['velvet_rust']),
        ("champagne gold metallic venetian plaster studio", "High (5k-50k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['gold_stucco']),
        ("metallic wall finish cost luxury architectural decor", "High (5k-50k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['guide_costs']),
        ("custom liquid bronze wall plaster finish application", "Medium (1k-5k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['metaline']),
        ("silver metallic marmorino plaster wall finish", "Medium (1k-5k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['metallic_hub']),
        ("antique brass metallic wall finish plaster sample", "Low (100-1k)", "Transactional/Product-led", "Metallic & Decorative Wall Finishes", routes['atelier']),
        ("iron rust effect decorative plaster finish indoors", "Medium (1k-5k)", "Commercial", "Metallic & Decorative Wall Finishes", routes['velvet_rust']),
        ("metallic burnished stucco wall finish luxury bar", "High (5k-50k)", "Local B2B", "Metallic & Decorative Wall Finishes", routes['metallic_hub']),
        ("rose gold decorative lime plaster accent wall", "Medium (1k-5k)", "Local B2C", "Metallic & Decorative Wall Finishes", routes['metallic_hub'])
    ]
    high_priority_entries.extend(metallic_high)

    # Microcement High Priority (15)
    microcement_high = [
        ("seamless microcement flooring installer cost per sq ft", "High (5k-50k)", "Commercial", "Microcement Application", routes['microcement_floors']),
        ("waterproof microcement shower wetroom application", "High (5k-50k)", "Commercial", "Microcement Application", routes['microcement_wetrooms']),
        ("microcement vs venetian plaster bathroom walls", "High (5k-50k)", "Informational", "Microcement Application", routes['guide_microcement']),
        ("luxury microcement kitchen countertop finish", "High (5k-50k)", "Commercial", "Microcement Application", routes['microcement_hub']),
        ("commercial microcement floor installation company", "High (5k-50k)", "Local B2B", "Microcement Application", routes['microcement_floors']),
        ("microcement bathroom wall and floor seamless system", "High (5k-50k)", "Commercial", "Microcement Application", routes['microcement_wetrooms']),
        ("outdoor microcement patio pool deck application", "Medium (1k-5k)", "Commercial", "Microcement Application", routes['microcement_hub']),
        ("microcement kit price 100 sq ft seamless", "High (5k-50k)", "Transactional/Product-led", "Microcement Application", routes['microcement_hub']),
        ("industrial microcement floor contractor near me", "High (5k-50k)", "Local B2B", "Microcement Application", routes['microcement_floors']),
        ("microcement overlay existing tiles bathroom", "High (5k-50k)", "Informational", "Microcement Application", routes['guide_application']),
        ("microcement maintenance sealer care products", "Medium (1k-5k)", "Transactional/Product-led", "Microcement Application", routes['guide_maintenance']),
        ("custom colored microcement floor finish studio", "High (5k-50k)", "Commercial", "Microcement Application", routes['microcement_floors']),
        ("microcement stairs installation luxury residence", "Medium (1k-5k)", "Local B2C", "Microcement Application", routes['microcement_floors']),
        ("two component microcement waterproof resin system", "Medium (1k-5k)", "Transactional/Product-led", "Microcement Application", routes['microcement_hub']),
        ("microcement wall finish contractor Miami FL", "High (5k-50k)", "Local B2C", "Microcement Application", routes['microcement_wetrooms'])
    ]
    high_priority_entries.extend(microcement_high)
    
    print(f"Total High Priority Entries Curated: {len(high_priority_entries)}")
    assert len(high_priority_entries) == 127, f"Expected 127 high priority entries, got {len(high_priority_entries)}"

    # 2. Systematic Combinatorial Generation for Medium and Low Priority entries (targeting 1850+ total)
    tool_items = [
        "venetian plaster trowel", "burnishing trowel", "lime plaster spatula", 
        "trapezoid plastering blade", "stainless steel plaster hawk", "lime putty scraper",
        "polished plaster trowel", "corner plastering tool", "marmorino finishing trowel",
        "microcement application blade", "plaster burnishing pad", "decorative stucco trowel",
        "titanium burnishing tool", "wooden handle plaster trowel", "flexible steel spatula",
        "lime mortar mixing paddle", "plaster wax polishing sponge", "notch squeegee microcement",
        "small detail trowel plaster", "plastering blade edge sharpener"
    ]

    lime_items = [
        "grassello di calce", "slaked lime plaster", "aged lime putty", 
        "calce rasata", "intonachino coarse", "intonachino fine",
        "authentic Italian lime stucco", "mineral lime wall finish", "eco slaked lime plaster",
        "lime basecoat mortar", "lime wash paint finish", "hydrated lime plaster",
        "venetian lime plaster paste", "breathable lime wall plaster", "zero VOC lime stucco",
        "pit-aged 24 month lime", "restoration lime plaster", "lime stucco tintable base",
        "traditional Venetian lime putty", "lime plaster topcoat smooth"
    ]

    contractor_items = [
        "venetian plaster contractor", "artisan plaster installer", "luxury wall finish specialist",
        "commercial plastering company", "residential decorative plasterer", "polished plaster applicator",
        "microcement floor contractor", "marmorino installer studio", "italian stucco applicator",
        "architectural plaster firm", "venetian plaster workshop studio", "master decorative plasterer",
        "custom wall texture contractor", "fireplace plaster specialist", "high end interior plasterer",
        "hotel feature wall plasterer", "luxury retail wall contractor", "bespoke plaster commissions",
        "seamless bathroom microcement installer", "exterior lime facade contractor"
    ]

    marmorino_items = [
        "marmorino naturale", "marmorino fine", "marmorino carrara", 
        "travertine plaster finish", "concrete effect marmorino", "pitted marmorino texture",
        "satin stone wall finish", "marmorino coarse stucco", "matte marmorino wall plaster",
        "slaked lime marmorino paste", "marmorino feature wall texture", "architectural marmorino",
        "colored marmorino stucco", "distressed stone plaster", "burnished marmorino finish",
        "marmorino plaster accent wall", "interior marmorino coating", "marmorino bathroom wall finish",
        "fine grain marble plaster", "custom tinted marmorino"
    ]

    metallic_items = [
        "metaline bronze finish", "velvet rust patina", "gold leaf stucco",
        "stucco metallico paste", "copper metaline plaster", "shimmer metallic glaze",
        "oxidized iron wall finish", "champagne gold decorative plaster", "silver metallic wall stucco",
        "antique brass wall plaster", "burnished bronze wall texture", "metallic lime plaster accent",
        "liquid metal wall coating", "rose gold venetian plaster", "pearl luster wall glaze",
        "metallic mica wall finish", "textured metallic feature wall", "industrial rust plaster finish",
        "metallic plaster for luxury bar", "iridescent wall stucco"
    ]

    microcement_items = [
        "seamless microcement floor", "waterproof microcement shower", "microcement kitchen countertop",
        "microcement bathroom walls", "microcement outdoor patio", "two component microcement kit",
        "microcement overlay over tile", "industrial microcement flooring", "microcement stair finish",
        "microcement sealer matte finish", "microcement pool deck coating", "seamless microcement wetroom",
        "microcement wall coating system", "decorative microcement floor", "microcement tintable resin base",
        "microcement vs polished concrete", "microcement coat per sq ft", "microcement resurfacing floor",
        "architectural microcement finish", "microcement vanity countertop"
    ]

    locations = [
        "New York", "Los Angeles", "Miami", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", 
        "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Fort Worth", 
        "Indianapolis", "Charlotte", "Seattle", "Denver", "Washington DC", "Boston", "El Paso", "Nashville", 
        "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore", "Milwaukee", 
        "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", "Kansas City", "Atlanta", "Omaha", "Colorado Springs", 
        "Raleigh", "Long Beach", "Virginia Beach", "Miami Beach", "Scottsdale", "Palm Beach", "Greenwich", "Aspen", "Beverly Hills", "Naples FL", "Newport Beach", "Boca Raton"
    ]

    volume_tiers = {
        "High": "High (5k-50k)",
        "Medium": "Medium (1k-5k)",
        "Low": "Low (100-1k)",
        "Micro": "Micro-Niche (10-100)"
    }

    all_rows = []

    # Insert the 127 high priority items first
    for query, vol, intent, cat, url in high_priority_entries:
        all_rows.append({
            'Query': query,
            'Search Volume Tier': vol,
            'Intent': intent,
            'Primary Category': cat,
            'Target URL Mapping': url,
            'Priority Flag': 'High'
        })

    def add_generated(query, vol, intent, cat, url):
        if any(r['Query'].lower() == query.lower() for r in all_rows):
            return
        all_rows.append({
            'Query': query,
            'Search Volume Tier': vol,
            'Intent': intent,
            'Primary Category': cat,
            'Target URL Mapping': url,
            'Priority Flag': 'Medium' if vol in ["High (5k-50k)", "Medium (1k-5k)"] else 'Low'
        })

    # Combinations for Tools (~320 queries)
    for tool in tool_items:
        add_generated(f"{tool} price guide", volume_tiers["Medium"], "Commercial", "Venetian Plaster Tools", routes['trowels'])
        add_generated(f"how to clean {tool}", volume_tiers["Low"], "Informational", "Venetian Plaster Tools", routes['guide_maintenance'])
        add_generated(f"best {tool} for beginners", volume_tiers["Medium"], "Informational", "Venetian Plaster Tools", routes['tools_hub'])
        add_generated(f"professional {tool} supplier", volume_tiers["Medium"], "Commercial", "Venetian Plaster Tools", routes['tools_hub'])
        add_generated(f"buy {tool} online USA", volume_tiers["Low"], "Transactional/Product-led", "Venetian Plaster Tools", routes['tools_hub'])
        add_generated(f"{tool} dimensions and specs", volume_tiers["Micro"], "Informational", "Venetian Plaster Tools", routes['tools_hub'])
        add_generated(f"imported Italian {tool}", volume_tiers["Low"], "Transactional/Product-led", "Venetian Plaster Tools", routes['trowels'])
        add_generated(f"flexible blade {tool} review", volume_tiers["Micro"], "Informational", "Venetian Plaster Tools", routes['spatulas'])
        add_generated(f"{tool} maintenance and sharpening", volume_tiers["Micro"], "Informational", "Venetian Plaster Tools", routes['guide_maintenance'])
        add_generated(f"{tool} replacement blades", volume_tiers["Micro"], "Transactional/Product-led", "Venetian Plaster Tools", routes['spatulas'])

    # Combinations for Italian Lime Plaster (~320 queries)
    for lime in lime_items:
        add_generated(f"{lime} coverage rate per gallon", volume_tiers["Medium"], "Informational", "Italian Lime Plaster", routes['guide_application'])
        add_generated(f"how to apply {lime} step by step", volume_tiers["High"], "Informational", "Italian Lime Plaster", routes['guide_application'])
        add_generated(f"buy {lime} bucket online", volume_tiers["Medium"], "Transactional/Product-led", "Italian Lime Plaster", routes['plaster_hub'])
        add_generated(f"{lime} architectural specification", volume_tiers["Low"], "Commercial", "Italian Lime Plaster", routes['plaster_hub'])
        add_generated(f"{lime} colors and tinting guide", volume_tiers["Medium"], "Informational", "Italian Lime Plaster", routes['plaster_hub'])
        add_generated(f"{lime} drying time between coats", volume_tiers["Low"], "Informational", "Italian Lime Plaster", routes['guide_application'])
        add_generated(f"{lime} vs acrylic plaster finish", volume_tiers["Medium"], "Informational", "Italian Lime Plaster", routes['guide_microcement'])
        add_generated(f"{lime} eco friendly wall plaster", volume_tiers["Low"], "Commercial", "Italian Lime Plaster", routes['plaster_hub'])
        add_generated(f"{lime} fire safety rating and MSDS", volume_tiers["Micro"], "Informational", "Italian Lime Plaster", routes['plaster_hub'])
        add_generated(f"custom tinting {lime} powder paste", volume_tiers["Low"], "Commercial", "Italian Lime Plaster", routes['plaster_hub'])

    # Combinations for Contractors & Local (~550 queries)
    for contractor in contractor_items[:13]:
        for loc in locations[:42]:
            add_generated(f"{contractor} in {loc}", volume_tiers["Low"], "Local B2C", "Venetian Plaster Contractors", routes['contractors_local'])
            add_generated(f"commercial {contractor} {loc}", volume_tiers["Micro"], "Local B2B", "Venetian Plaster Contractors", routes['contractors_b2b'])

    # Combinations for Marmorino (~320 queries)
    for marm in marmorino_items:
        add_generated(f"{marm} wall finish texture", volume_tiers["Medium"], "Commercial", "Marmorino & Textured Finishes", routes['marmorino'])
        add_generated(f"how to achieve {marm} effect", volume_tiers["Medium"], "Informational", "Marmorino & Textured Finishes", routes['guide_application'])
        add_generated(f"{marm} cost per square foot", volume_tiers["High"], "Commercial", "Marmorino & Textured Finishes", routes['guide_costs'])
        add_generated(f"custom tint {marm} plaster", volume_tiers["Low"], "Transactional/Product-led", "Marmorino & Textured Finishes", routes['marmorino'])
        add_generated(f"{marm} for luxury interior design", volume_tiers["Medium"], "Local B2C", "Marmorino & Textured Finishes", routes['marmorino'])
        add_generated(f"{marm} sealing wax protection", volume_tiers["Low"], "Informational", "Marmorino & Textured Finishes", routes['guide_maintenance'])
        add_generated(f"{marm} sample board order", volume_tiers["Low"], "Transactional/Product-led", "Marmorino & Textured Finishes", routes['atelier'])
        add_generated(f"{marm} acoustic insulation properties", volume_tiers["Micro"], "Informational", "Marmorino & Textured Finishes", routes['marmorino'])

    # Combinations for Metallic (~280 queries)
    for metal in metallic_items:
        add_generated(f"{metal} accent wall ideas", volume_tiers["Medium"], "Informational", "Metallic & Decorative Wall Finishes", routes['metallic_hub'])
        add_generated(f"how to glaze {metal}", volume_tiers["Low"], "Informational", "Metallic & Decorative Wall Finishes", routes['guide_application'])
        add_generated(f"luxury {metal} price", volume_tiers["Medium"], "Commercial", "Metallic & Decorative Wall Finishes", routes['metallic_hub'])
        add_generated(f"{metal} application video guide", volume_tiers["Low"], "Informational", "Metallic & Decorative Wall Finishes", routes['guide_application'])
        add_generated(f"{metal} for boutique hotel interior", volume_tiers["Low"], "Local B2B", "Metallic & Decorative Wall Finishes", routes['metallic_hub'])
        add_generated(f"buy {metal} paste bucket", volume_tiers["Low"], "Transactional/Product-led", "Metallic & Decorative Wall Finishes", routes['metallic_hub'])
        add_generated(f"{metal} patina aging accelerator", volume_tiers["Micro"], "Commercial", "Metallic & Decorative Wall Finishes", routes['velvet_rust'])

    # Combinations for Microcement (~280 queries)
    for micro in microcement_items:
        add_generated(f"{micro} installation guide", volume_tiers["High"], "Informational", "Microcement Application", routes['guide_application'])
        add_generated(f"{micro} price breakdown", volume_tiers["High"], "Commercial", "Microcement Application", routes['guide_costs'])
        add_generated(f"{micro} durability in wet areas", volume_tiers["Medium"], "Informational", "Microcement Application", routes['microcement_wetrooms'])
        add_generated(f"buy {micro} online kit", volume_tiers["Medium"], "Transactional/Product-led", "Microcement Application", routes['microcement_hub'])
        add_generated(f"commercial {micro} installer", volume_tiers["Medium"], "Local B2B", "Microcement Application", routes['microcement_floors'])
        add_generated(f"{micro} sealer application tips", volume_tiers["Low"], "Informational", "Microcement Application", routes['guide_maintenance'])
        add_generated(f"{micro} slip resistance rating R10", volume_tiers["Micro"], "Informational", "Microcement Application", routes['microcement_floors'])

    print(f"Total Keyword Rows Generated: {len(all_rows)}")
    
    # Write out CSV file
    fieldnames = [
        'Query',
        'Search Volume Tier',
        'Intent',
        'Primary Category',
        'Target URL Mapping',
        'Priority Flag'
    ]
    
    with open(output_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(all_rows)
        
    print(f"Successfully exported {len(all_rows)} keywords to {output_path}")

    # Priority Summary Count
    high_count = sum(1 for r in all_rows if r['Priority Flag'] == 'High')
    med_count = sum(1 for r in all_rows if r['Priority Flag'] == 'Medium')
    low_count = sum(1 for r in all_rows if r['Priority Flag'] == 'Low')
    print(f"Priority Distribution - High: {high_count}, Medium: {med_count}, Low: {low_count}")

if __name__ == '__main__':
    generate_keywords()
