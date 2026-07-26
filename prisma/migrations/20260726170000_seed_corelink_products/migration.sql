WITH "seed_products" (
  "uuid",
  "name",
  "title",
  "description",
  "category_name",
  "cover_url",
  "metadata",
  "sort"
) AS (
  VALUES
    (
      'corelink-product-g657a2-fiber',
      'g657a2-bending-insensitive-fiber',
      'G.657.A2 Bending-Insensitive Single-Mode Fiber',
      'Bend-optimized single-mode optical fiber for compact routing, access networks, data centers, and fiber-to-the-home installations.',
      'optical-fiber',
      '/images/corelink-fiber-closeup.jpg',
      $${
        "model": "CLF-G657A2",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-fiber-closeup.jpg", "/images/corelink-fiber-hero.jpg"],
        "characteristics": ["Excellent macrobending performance", "Compatible with G.652.D transmission systems", "Stable attenuation across the operating wavelength range"],
        "applications": ["FTTH access networks", "Data center cross-connects", "High-density indoor routing"],
        "specifications": {
          "Fiber Type": "Single-mode",
          "Standard": "ITU-T G.657.A2",
          "Mode Field Diameter": "8.6–9.5 μm at 1310 nm",
          "Attenuation": "≤ 0.35 dB/km at 1310 nm",
          "Cladding Diameter": "125 ± 0.7 μm"
        }
      }$$,
      10
    ),
    (
      'corelink-product-g652d-fiber',
      'g652d-low-loss-single-mode-fiber',
      'G.652.D Low-Loss Single-Mode Fiber',
      'General-purpose low-loss optical fiber engineered for long-haul, metro, access, and campus backbone transmission.',
      'optical-fiber',
      '/images/corelink-fiber-hero.jpg',
      $${
        "model": "CLF-G652D",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-fiber-hero.jpg", "/images/corelink-fiber-closeup.jpg"],
        "characteristics": ["Low attenuation for long transmission distance", "Low polarization mode dispersion", "Full-spectrum operation from 1260 to 1625 nm"],
        "applications": ["Long-haul transmission", "Metro and access networks", "Campus and enterprise backbones"],
        "specifications": {
          "Fiber Type": "Single-mode",
          "Standard": "ITU-T G.652.D",
          "Attenuation": "≤ 0.34 dB/km at 1310 nm",
          "Zero Dispersion Wavelength": "1300–1324 nm",
          "Cladding Diameter": "125 ± 0.7 μm"
        }
      }$$,
      20
    ),
    (
      'corelink-product-om4-fiber',
      'om4-laser-optimized-multimode-fiber',
      'OM4 Laser-Optimized Multimode Fiber',
      'High-bandwidth multimode fiber for short-reach, high-speed Ethernet and storage networks in modern data centers.',
      'optical-fiber',
      '/images/corelink-portfolio-data-center.jpg',
      $${
        "model": "CLF-OM4",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-portfolio-data-center.jpg", "/images/corelink-fiber-closeup.jpg"],
        "characteristics": ["Optimized for 850 nm VCSEL transmission", "Supports high-speed short-reach links", "Controlled differential mode delay"],
        "applications": ["Data center interconnects", "40G and 100G Ethernet", "Storage area networks"],
        "specifications": {
          "Fiber Type": "Multimode",
          "Standard": "IEC 60793-2-10 Type A1a.3",
          "Core Diameter": "50 ± 2.5 μm",
          "Effective Modal Bandwidth": "≥ 4700 MHz·km at 850 nm",
          "Attenuation": "≤ 2.3 dB/km at 850 nm"
        }
      }$$,
      30
    ),
    (
      'corelink-product-hollow-core-fiber',
      'hollow-core-fiber',
      'Hollow-Core Fiber',
      'Advanced fiber that guides light primarily through air to reduce latency and nonlinear effects in demanding transmission systems.',
      'optical-fiber',
      '/images/corelink-feature-hollow-core.jpg',
      $${
        "model": "CLF-HCF",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-feature-hollow-core.jpg", "/images/corelink-about-innovation.jpg"],
        "characteristics": ["Ultra-low propagation latency", "Suppressed nonlinear optical effects", "High power handling potential"],
        "applications": ["Low-latency data links", "Advanced sensing systems", "Next-generation optical research"],
        "specifications": {
          "Fiber Type": "Hollow-core",
          "Guidance Medium": "Air",
          "Operating Window": "Application configurable",
          "Construction": "Microstructured glass cladding"
        }
      }$$,
      40
    ),
    (
      'corelink-product-high-density-micro-cable',
      'high-density-micro-fiber-cable',
      'High-Density Micro Fiber Cable',
      'Compact, high-fiber-count cable designed to increase duct utilization and simplify dense backbone deployment.',
      'fiber-cable',
      '/images/corelink-feature-high-density.jpg',
      $${
        "model": "CLC-HDMC",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-feature-high-density.jpg", "/images/corelink-network-rack.jpg"],
        "characteristics": ["High fiber density in a compact diameter", "Low-friction sheath for easier installation", "Flexible construction for constrained pathways"],
        "applications": ["Data center campuses", "Metro backbone networks", "Microduct installations"],
        "specifications": {
          "Fiber Count": "24–432 fibers",
          "Cable Type": "Micro loose tube",
          "Installation": "Duct or air-blown",
          "Operating Temperature": "-40°C to +70°C",
          "Jacket": "PE or LSZH"
        }
      }$$,
      10
    ),
    (
      'corelink-product-outdoor-armored-cable',
      'outdoor-armored-fiber-cable',
      'Outdoor Armored Fiber Cable',
      'Rugged loose-tube cable with mechanical and moisture protection for reliable outdoor and direct-buried routes.',
      'fiber-cable',
      '/images/corelink-portfolio-industrial.jpg',
      $${
        "model": "CLC-OAC",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-portfolio-industrial.jpg", "/images/corelink-fiber-hero.jpg"],
        "characteristics": ["Corrugated steel tape armor", "Water-blocking cable core", "UV-resistant polyethylene jacket"],
        "applications": ["Direct-buried routes", "Industrial campus networks", "Telecom outside plant"],
        "specifications": {
          "Fiber Count": "2–288 fibers",
          "Armor": "Corrugated steel tape",
          "Jacket": "UV-resistant PE",
          "Installation": "Duct or direct buried",
          "Operating Temperature": "-40°C to +70°C"
        }
      }$$,
      20
    ),
    (
      'corelink-product-indoor-riser-cable',
      'indoor-riser-fiber-cable',
      'Indoor Riser Fiber Cable',
      'Flame-retardant indoor cable for vertical backbone pathways and telecommunications rooms in commercial facilities.',
      'fiber-cable',
      '/images/corelink-network-rack.jpg',
      $${
        "model": "CLC-IRC",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-network-rack.jpg", "/images/corelink-portfolio-data-center.jpg"],
        "characteristics": ["Flame-retardant riser-rated construction", "Compact and flexible for indoor routing", "Available with single-mode or multimode fiber"],
        "applications": ["Building riser backbones", "Telecommunications rooms", "Enterprise networks"],
        "specifications": {
          "Fiber Count": "2–144 fibers",
          "Flame Rating": "OFNR",
          "Jacket": "Flame-retardant PVC",
          "Fiber Options": "OS2, OM3, OM4, OM5",
          "Operating Temperature": "-20°C to +70°C"
        }
      }$$,
      30
    ),
    (
      'corelink-product-air-blown-cable',
      'air-blown-microduct-fiber-cable',
      'Air-Blown Microduct Fiber Cable',
      'Lightweight micro cable optimized for jetting into microduct networks and expanding capacity as demand grows.',
      'fiber-cable',
      '/images/corelink-home-about.jpg',
      $${
        "model": "CLC-ABM",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-home-about.jpg", "/images/corelink-feature-high-density.jpg"],
        "characteristics": ["Low weight and small outer diameter", "Optimized surface for long blowing distance", "Scalable pay-as-you-grow deployment"],
        "applications": ["Microduct networks", "Urban access networks", "Campus capacity expansion"],
        "specifications": {
          "Fiber Count": "12–288 fibers",
          "Installation": "Air blown",
          "Jacket": "Low-friction HDPE",
          "Fiber Options": "G.652.D or G.657.A2",
          "Operating Temperature": "-30°C to +70°C"
        }
      }$$,
      40
    ),
    (
      'corelink-product-mpo-trunk',
      'mpo-mtp-high-density-trunk-assembly',
      'MPO/MTP High-Density Trunk Assembly',
      'Factory-terminated multifiber trunk assembly for rapid, repeatable deployment in high-density data center links.',
      'fiber-cable-assemblies',
      '/images/corelink-hero-fiber-assembly.jpg',
      $${
        "model": "CLA-MPO-TRUNK",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-hero-fiber-assembly.jpg", "/images/corelink-feature-connection.jpg"],
        "characteristics": ["100% factory tested", "Multiple polarity and pin configurations", "High-density plug-and-play deployment"],
        "applications": ["Data center backbone links", "Parallel optics", "High-density patching"],
        "specifications": {
          "Connector": "MPO/MTP 8, 12, 16, or 24 fiber",
          "Fiber Options": "OS2, OM3, OM4, OM5",
          "Insertion Loss": "Standard or low-loss grade",
          "Polarity": "Type A, B, or C",
          "Jacket": "LSZH, OFNR, or OFNP"
        }
      }$$,
      10
    ),
    (
      'corelink-product-lc-duplex',
      'lc-lc-duplex-fiber-patch-cord',
      'LC–LC Duplex Fiber Patch Cord',
      'Precision duplex patch cord for dependable equipment, panel, and cross-connect links in telecom and data networks.',
      'fiber-cable-assemblies',
      '/images/corelink-feature-connection.jpg',
      $${
        "model": "CLA-LC-DX",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-feature-connection.jpg", "/images/corelink-hero-fiber-assembly.jpg"],
        "characteristics": ["Low insertion loss and high return loss", "Compact LC duplex interface", "Individually tested and serialized"],
        "applications": ["Switch-to-panel connections", "Optical distribution frames", "Enterprise and data center networks"],
        "specifications": {
          "Connector": "LC UPC or LC APC",
          "Fiber Options": "OS2, OM3, OM4, OM5",
          "Insertion Loss": "≤ 0.30 dB typical",
          "Cable Diameter": "2.0 mm or 3.0 mm",
          "Jacket": "LSZH, OFNR, or OFNP"
        }
      }$$,
      20
    ),
    (
      'corelink-product-breakout-harness',
      'mpo-lc-breakout-harness',
      'MPO/MTP–LC Breakout Harness',
      'High-density conversion harness that transitions parallel multifiber interfaces to individual LC equipment ports.',
      'fiber-cable-assemblies',
      '/images/corelink-portfolio-data-center.jpg',
      $${
        "model": "CLA-MPO-LC",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-portfolio-data-center.jpg", "/images/corelink-hero-fiber-assembly.jpg"],
        "characteristics": ["Space-saving fan-out construction", "Clearly identified duplex legs", "Custom lengths and breakout configurations"],
        "applications": ["40G-to-10G migration", "100G-to-25G migration", "Data center equipment breakout"],
        "specifications": {
          "Trunk Connector": "MPO/MTP",
          "Breakout Connector": "LC duplex",
          "Fiber Options": "OS2, OM3, OM4, OM5",
          "Leg Count": "4, 6, 8, or custom",
          "Polarity": "Application configured"
        }
      }$$,
      30
    ),
    (
      'corelink-product-fiber-cassette',
      'preterminated-fiber-cassette',
      'Pre-Terminated Fiber Cassette',
      'Modular cassette that organizes pre-terminated fiber transitions for fast installation and controlled cable management.',
      'fiber-cable-assemblies',
      '/images/corelink-network-rack.jpg',
      $${
        "model": "CLA-CASSETTE",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-network-rack.jpg", "/images/corelink-feature-connection.jpg"],
        "characteristics": ["Modular plug-and-play installation", "Protected internal fiber routing", "Clear port identification"],
        "applications": ["High-density patch panels", "Data center meet-me rooms", "Modular distribution systems"],
        "specifications": {
          "Rear Interface": "MPO/MTP",
          "Front Interface": "LC or SC",
          "Fiber Options": "OS2, OM3, OM4, OM5",
          "Capacity": "Up to 24 fibers",
          "Housing": "Powder-coated metal"
        }
      }$$,
      40
    ),
    (
      'corelink-product-hook-loop-tie',
      'reusable-hook-and-loop-cable-tie',
      'Reusable Hook-and-Loop Cable Tie',
      'Soft, reusable fastening solution for organizing sensitive optical cables without excessive compression.',
      'cable-tie',
      '/images/corelink-portfolio-cable-ties.jpg',
      $${
        "model": "CLT-HL",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-portfolio-cable-ties.jpg"],
        "characteristics": ["Fiber-friendly low-pressure bundling", "Reusable and repositionable", "Multiple colors for route identification"],
        "applications": ["Optical patch cord management", "Data center racks", "Moves, adds, and changes"],
        "specifications": {
          "Material": "Hook-and-loop fabric",
          "Widths": "12, 16, or 20 mm",
          "Lengths": "150–600 mm",
          "Closure": "Reusable",
          "Colors": "Black and project-specific colors"
        }
      }$$,
      10
    ),
    (
      'corelink-product-nylon-tie',
      'uv-resistant-nylon-cable-tie',
      'UV-Resistant Nylon Cable Tie',
      'Durable one-piece cable tie for general-purpose indoor and outdoor cable routing and equipment installation.',
      'cable-tie',
      '/images/products3.png',
      $${
        "model": "CLT-UVN",
        "brand": "CoreLinkCable",
        "gallery": ["/images/products3.png", "/images/corelink-portfolio-cable-ties.jpg"],
        "characteristics": ["UV-stabilized nylon construction", "Smooth rounded edges", "Consistent locking performance"],
        "applications": ["Outdoor cable routing", "Industrial equipment", "General infrastructure installation"],
        "specifications": {
          "Material": "UV-stabilized nylon 6/6",
          "Flammability": "UL 94 V-2",
          "Operating Temperature": "-40°C to +85°C",
          "Closure": "Self-locking",
          "Color": "Black"
        }
      }$$,
      20
    ),
    (
      'corelink-product-stainless-tie',
      'stainless-steel-cable-tie',
      'Stainless Steel Cable Tie',
      'High-strength corrosion-resistant tie for harsh industrial, outdoor, and high-temperature cable installations.',
      'cable-tie',
      '/images/corelink-portfolio-cable-ties.jpg',
      $${
        "model": "CLT-SS",
        "brand": "CoreLinkCable",
        "gallery": ["/images/corelink-portfolio-cable-ties.jpg", "/images/products3.png"],
        "characteristics": ["High tensile strength", "Excellent corrosion resistance", "Suitable for wide temperature ranges"],
        "applications": ["Industrial plants", "Outdoor telecom routes", "High-temperature environments"],
        "specifications": {
          "Material": "304 or 316 stainless steel",
          "Closure": "Ball-lock",
          "Operating Temperature": "-80°C to +538°C",
          "Finish": "Uncoated or polyester coated",
          "Installation": "Manual or tensioning tool"
        }
      }$$,
      30
    ),
    (
      'corelink-product-push-mount-tie',
      'push-mount-cable-tie',
      'Push-Mount Cable Tie',
      'Integrated fastening and panel-mounting tie for efficient cable harness installation inside equipment and enclosures.',
      'cable-tie',
      '/images/products3.png',
      $${
        "model": "CLT-PM",
        "brand": "CoreLinkCable",
        "gallery": ["/images/products3.png", "/images/corelink-portfolio-cable-ties.jpg"],
        "characteristics": ["One-step bundling and panel mounting", "Secure anchor for drilled panels", "Compact profile for equipment interiors"],
        "applications": ["Control cabinets", "Network equipment", "Industrial wiring harnesses"],
        "specifications": {
          "Material": "Nylon 6/6",
          "Mounting": "Push mount",
          "Panel Thickness": "Application dependent",
          "Closure": "Self-locking",
          "Colors": "Natural or black"
        }
      }$$,
      40
    )
)
INSERT INTO "products" (
  "uuid",
  "name",
  "title",
  "description",
  "category_uuid",
  "status",
  "cover_url",
  "metadata",
  "sort",
  "created_at",
  "updated_at"
)
SELECT
  "seed_products"."uuid",
  "seed_products"."name",
  "seed_products"."title",
  "seed_products"."description",
  "product_categories"."uuid",
  'online',
  "seed_products"."cover_url",
  "seed_products"."metadata"::jsonb,
  "seed_products"."sort",
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
FROM "seed_products"
INNER JOIN "product_categories"
  ON "product_categories"."name" = "seed_products"."category_name"
ON CONFLICT ("uuid") DO NOTHING;
