INSERT INTO "product_categories" (
  "uuid",
  "name",
  "title",
  "description",
  "features",
  "cover_url",
  "banner_url",
  "sort",
  "created_at",
  "updated_at"
)
VALUES
  (
    'corelink-optical-fiber',
    'optical-fiber',
    'Optical Fiber',
    'Single-mode, multimode, and bend-insensitive optical fiber for telecom, data center, access, and industrial networks.',
    '["Single-mode optical fiber", "Bend-insensitive optical fiber", "Multimode optical fiber"]'::jsonb,
    '/images/corelink-fiber-closeup.jpg',
    '/images/corelink-fiber-hero.jpg',
    10,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    'corelink-fiber-cable',
    'fiber-cable',
    'Fiber Cable',
    'Indoor, outdoor, aerial, duct, direct-buried, and application-specific fiber cable constructions.',
    '["Indoor and outdoor cable", "Aerial, duct, and direct-buried cable", "Armored and application-specific cable"]'::jsonb,
    '/images/corelink-fiber-hero.jpg',
    '/images/corelink-fiber-hero.jpg',
    20,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    'corelink-fiber-cable-assemblies',
    'fiber-cable-assemblies',
    'Fiber Cable Assemblies',
    'Factory-terminated fiber assemblies configured for consistent performance, identification, and installation.',
    '["Patch cords and pigtails", "Pre-terminated trunks", "LC, SC, and MPO/MTP assemblies"]'::jsonb,
    '/images/corelink-network-rack.jpg',
    '/images/corelink-network-rack.jpg',
    30,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  ),
  (
    'corelink-cable-tie',
    'cable-tie',
    'Cable Tie',
    'Cable fastening and management products for organizing, securing, and protecting installed cable routes.',
    '["Cable routing and bundling", "Indoor and outdoor options", "Project-specific sizes and materials"]'::jsonb,
    '/images/products3.png',
    '/images/contact-hero.jpg',
    40,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  )
ON CONFLICT ("name") DO UPDATE
SET
  "title" = EXCLUDED."title",
  "description" = EXCLUDED."description",
  "features" = EXCLUDED."features",
  "cover_url" = EXCLUDED."cover_url",
  "banner_url" = EXCLUDED."banner_url",
  "sort" = EXCLUDED."sort",
  "updated_at" = CURRENT_TIMESTAMP;
