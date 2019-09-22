import {AbstractConverter} from "./AbstractConverter";

/**
 * Class RenameConverter
 */
class RenameConverter extends AbstractConverter {
	/**
	 * @inheritDoc
	 */
	async convert() {
		for await (const [from, to] of this.getData()) {
			if (await this.output.exists(from)) {
				this.log.log(`Rename ${from} to ${to}`);

				await this.output.rename(from, to);
			}
		}

		return [];
	}

	/**
	 * @inheritDoc
	 */
	static get DATA() {
		return [
			// Icon
			["pack.png", "pack_icon.png"],

			// Base folder
			["assets/minecraft/textures/", "textures/"],

			// Folder
			["textures/block/", "textures/blocks/"],
			["textures/item/", "textures/items/"],

			// Andesite
			["textures/blocks/andesite.png", "textures/blocks/stone_andesite.png"],
			["textures/blocks/polished_andesite.png", "textures/blocks/stone_andesite_smooth.png"],

			// Anvil
			["textures/blocks/anvil.png", "textures/blocks/anvil_base.png"],
			["textures/blocks/anvil_top.png", "textures/blocks/anvil_top_damaged_0.png"],
			["textures/blocks/chipped_anvil_top.png", "textures/blocks/anvil_top_damaged_1.png"],
			["textures/blocks/damaged_anvil_top.png", "textures/blocks/anvil_top_damaged_2.png"],

			// Apple
			["textures/items/golden_apple.png", "textures/items/apple_golden.png"],

			// Armor & tool
			["textures/entity/armorstand/wood.png", "textures/entity/armor_stand.png"],
			["textures/entity/elytra.png", "textures/models/armor/elytra.png"],
			["textures/items/golden_axe.png", "textures/items/gold_axe.png"],
			["textures/items/golden_boots.png", "textures/items/gold_boots.png"],
			["textures/items/golden_chestplate.png", "textures/items/gold_chestplate.png"],
			["textures/items/golden_helmet.png", "textures/items/gold_helmet.png"],
			["textures/items/golden_hoe.png", "textures/items/gold_hoe.png"],
			["textures/items/golden_horse_armor.png", "textures/items/gold_horse_armor.png"],
			["textures/items/golden_leggings.png", "textures/items/gold_leggings.png"],
			["textures/items/golden_pickaxe.png", "textures/items/gold_pickaxe.png"],
			["textures/items/golden_shovel.png", "textures/items/gold_shovel.png"],
			["textures/items/golden_sword.png", "textures/items/gold_sword.png"],
			["textures/items/wooden_axe.png", "textures/items/wood_axe.png"],
			["textures/items/wooden_hoe.png", "textures/items/wood_hoe.png"],
			["textures/items/wooden_pickaxe.png", "textures/items/wood_pickaxe.png"],
			["textures/items/wooden_shovel.png", "textures/items/wood_shovel.png"],
			["textures/items/wooden_sword.png", "textures/items/wood_sword.png"],
			["textures/models/armor/chainmail_layer_1.png", "textures/models/armor/chain_1.png"],
			["textures/models/armor/chainmail_layer_2.png", "textures/models/armor/chain_2.png"],
			["textures/models/armor/diamond_layer_1.png", "textures/models/armor/diamond_1.png"],
			["textures/models/armor/diamond_layer_2.png", "textures/models/armor/diamond_2.png"],
			["textures/models/armor/gold_layer_1.png", "textures/models/armor/gold_1.png"],
			["textures/models/armor/gold_layer_2.png", "textures/models/armor/gold_2.png"],
			["textures/models/armor/iron_layer_1.png", "textures/models/armor/iron_1.png"],
			["textures/models/armor/iron_layer_2.png", "textures/models/armor/iron_2.png"],
			["textures/models/armor/leather_layer_1.png", "textures/models/armor/leather_1.png"],
			["textures/models/armor/leather_layer_1_overlay.png", "textures/models/armor/leather_1_overlay.png"],
			["textures/models/armor/leather_layer_2.png", "textures/models/armor/leather_2.png"],
			["textures/models/armor/leather_layer_2_overlay.png", "textures/models/armor/leather_2_overlay.png"],
			["textures/models/armor/turtle_layer_1.png", "textures/models/armor/turtle_1.png"],

			// Arrow
			["textures/entity/arrow.png", "textures/entity/arrows.png"],

			// Bamboo
			["textures/blocks/bamboo_large_leaves.png", "textures/blocks/bamboo_leaf.png"],
			["textures/blocks/bamboo_small_leaves.png", "textures/blocks/bamboo_small_leaf.png"],
			["textures/blocks/bamboo_stage0.png", "textures/blocks/bamboo_sapling.png"],
			["textures/blocks/bamboo_stalk.png", "textures/blocks/bamboo_stem.png"],

			// Barrier
			["textures/items/barrier.png", "textures/blocks/barrier.png"],

			// Bear
			["textures/entity/bear/polarbear.png", "textures/entity/polarbear.png"],

			// Bed
			["textures/entity/bed/light_gray.png", "textures/entity/bed/silver.png"],

			// Beetroot
			["textures/blocks/beetroots_stage0.png", "textures/blocks/beetroots_stage_0.png"],
			["textures/blocks/beetroots_stage1.png", "textures/blocks/beetroots_stage_1.png"],
			["textures/blocks/beetroots_stage2.png", "textures/blocks/beetroots_stage_2.png"],
			["textures/blocks/beetroots_stage3.png", "textures/blocks/beetroots_stage_3.png"],

			// Bell
			["textures/entity/bell/bell_body.png", "textures/entity/bell/bell.png"],
			["textures/items/bell.png", "textures/items/villagebell.png"],

			// Boat
			["textures/entity/boat/acacia.png", "textures/entity/boat/boat_acacia.png"],
			["textures/entity/boat/birch.png", "textures/entity/boat/boat_birch.png"],
			["textures/entity/boat/dark_oak.png", "textures/entity/boat/boat_darkoak.png"],
			["textures/entity/boat/jungle.png", "textures/entity/boat/boat_jungle.png"],
			["textures/entity/boat/oak.png", "textures/entity/boat/boat_oak.png"],
			["textures/entity/boat/spruce.png", "textures/entity/boat/boat_spruce.png"],
			["textures/items/acacia_boat.png", "textures/items/boat_acacia.png"],
			["textures/items/birch_boat.png", "textures/items/boat_birch.png"],
			["textures/items/dark_oak_boat.png", "textures/items/boat_darkoak.png"],
			["textures/items/jungle_boat.png", "textures/items/boat_jungle.png"],
			["textures/items/oak_boat.png", "textures/items/boat_oak.png"],
			["textures/items/spruce_boat.png", "textures/items/boat_spruce.png"],

			// Bone
			["textures/items/bone_meal.png", "textures/items/dye_powder_white.png"],

			// Book
			["textures/items/book.png", "textures/items/book_normal.png"],
			["textures/items/enchanted_book.png", "textures/items/book_enchanted.png"],
			["textures/items/knowledge_book.png", "textures/items/book_knowledge.png"],
			["textures/items/writable_book.png", "textures/items/book_writable.png"],
			["textures/items/written_book.png", "textures/items/book_written.png"],

			// Bow
			["textures/items/bow.png", "textures/items/bow_standby.png"],

			// Brick
			["textures/blocks/bricks.png", "textures/blocks/brick.png"],

			// Bucket
			["textures/items/bucket.png", "textures/items/bucket_empty.png"],
			["textures/items/cod_bucket.png", "textures/items/bucket_cod.png"],
			["textures/items/lava_bucket.png", "textures/items/bucket_lava.png"],
			["textures/items/milk_bucket.png", "textures/items/bucket_milk.png"],
			["textures/items/pufferfish_bucket.png", "textures/items/bucket_pufferfish.png"],
			["textures/items/salmon_bucket.png", "textures/items/bucket_salmon.png"],
			["textures/items/tropical_fish_bucket.png", "textures/items/bucket_tropical.png"],
			["textures/items/water_bucket.png", "textures/items/bucket_water.png"],

			// Campfire
			["textures/blocks/campfire_fire.png", "textures/blocks/campfire.png"],

			// Carrot
			["textures/blocks/carrots_stage0.png", "textures/blocks/carrots_stage_0.png"],
			["textures/blocks/carrots_stage1.png", "textures/blocks/carrots_stage_1.png"],
			["textures/blocks/carrots_stage2.png", "textures/blocks/carrots_stage_2.png"],
			["textures/blocks/carrots_stage3.png", "textures/blocks/carrots_stage_3.png"],
			["textures/items/golden_carrot.png", "textures/items/carrot_golden.png"],

			// Cat
			["textures/entity/cat/all_black.png", "textures/entity/cat/allblackcat.png"],
			["textures/entity/cat/black.png", "textures/entity/cat/tuxedo.png"],
			["textures/entity/cat/british_shorthair.png", "textures/entity/cat/britishshorthair.png"],
			["textures/entity/cat/cat_collar.png", "textures/entity/cat/graytabby_tame.png"],
			["textures/entity/cat/red.png", "textures/entity/cat/redtabby.png"],
			["textures/entity/cat/siamese.png", "textures/entity/cat/siamesecat.png"],

			// Chest
			["textures/entity/chest/normal_double.png", "textures/entity/chest/double_normal.png"],

			// Chorus fruit
			["textures/items/popped_chorus_fruit.png", "textures/items/chorus_fruit_popped.png"],

			// Cobblestone
			["textures/blocks/mossy_cobblestone.png", "textures/blocks/cobblestone_mossy.png"],

			// Cobweb
			["textures/blocks/cobweb.png", "textures/blocks/web.png"],

			// Cocoa
			["textures/blocks/cocoa_stage0.png", "textures/blocks/cocoa_stage_0.png"],
			["textures/blocks/cocoa_stage1.png", "textures/blocks/cocoa_stage_1.png"],
			["textures/blocks/cocoa_stage2.png", "textures/blocks/cocoa_stage_2.png"],
			["textures/items/cocoa_beans.png", "textures/items/dye_powder_brown.png"],

			// Comparator
			["textures/blocks/comparator.png", "textures/blocks/comparator_off.png"],

			// Composter
			["textures/blocks/composter_compost.png", "textures/blocks/compost.png"],
			["textures/blocks/composter_ready.png", "textures/blocks/compost_ready.png"],

			// Concrete
			["textures/blocks/black_concrete.png", "textures/blocks/concrete_black.png"],
			["textures/blocks/blue_concrete.png", "textures/blocks/concrete_blue.png"],
			["textures/blocks/brown_concrete.png", "textures/blocks/concrete_brown.png"],
			["textures/blocks/cyan_concrete.png", "textures/blocks/concrete_cyan.png"],
			["textures/blocks/gray_concrete.png", "textures/blocks/concrete_gray.png"],
			["textures/blocks/green_concrete.png", "textures/blocks/concrete_green.png"],
			["textures/blocks/light_blue_concrete.png", "textures/blocks/concrete_light_blue.png"],
			["textures/blocks/light_gray_concrete.png", "textures/blocks/concrete_silver.png"],
			["textures/blocks/lime_concrete.png", "textures/blocks/concrete_lime.png"],
			["textures/blocks/magenta_concrete.png", "textures/blocks/concrete_magenta.png"],
			["textures/blocks/orange_concrete.png", "textures/blocks/concrete_orange.png"],
			["textures/blocks/pink_concrete.png", "textures/blocks/concrete_pink.png"],
			["textures/blocks/purple_concrete.png", "textures/blocks/concrete_purple.png"],
			["textures/blocks/red_concrete.png", "textures/blocks/concrete_red.png"],
			["textures/blocks/white_concrete.png", "textures/blocks/concrete_white.png"],
			["textures/blocks/yellow_concrete.png", "textures/blocks/concrete_yellow.png"],

			// Concrete powder
			["textures/blocks/black_concrete_powder.png", "textures/blocks/concrete_powder_black.png"],
			["textures/blocks/blue_concrete_powder.png", "textures/blocks/concrete_powder_blue.png"],
			["textures/blocks/brown_concrete_powder.png", "textures/blocks/concrete_powder_brown.png"],
			["textures/blocks/cyan_concrete_powder.png", "textures/blocks/concrete_powder_cyan.png"],
			["textures/blocks/gray_concrete_powder.png", "textures/blocks/concrete_powder_gray.png"],
			["textures/blocks/green_concrete_powder.png", "textures/blocks/concrete_powder_green.png"],
			["textures/blocks/light_blue_concrete_powder.png", "textures/blocks/concrete_powder_light_blue.png"],
			["textures/blocks/light_gray_concrete_powder.png", "textures/blocks/concrete_powder_silver.png"],
			["textures/blocks/lime_concrete_powder.png", "textures/blocks/concrete_powder_lime.png"],
			["textures/blocks/magenta_concrete_powder.png", "textures/blocks/concrete_powder_magenta.png"],
			["textures/blocks/orange_concrete_powder.png", "textures/blocks/concrete_powder_orange.png"],
			["textures/blocks/pink_concrete_powder.png", "textures/blocks/concrete_powder_pink.png"],
			["textures/blocks/purple_concrete_powder.png", "textures/blocks/concrete_powder_purple.png"],
			["textures/blocks/red_concrete_powder.png", "textures/blocks/concrete_powder_red.png"],
			["textures/blocks/white_concrete_powder.png", "textures/blocks/concrete_powder_white.png"],
			["textures/blocks/yellow_concrete_powder.png", "textures/blocks/concrete_powder_yellow.png"],

			// Conduit
			["textures/entity/conduit/base.png", "textures/blocks/conduit_base.png"],
			["textures/entity/conduit/cage.png", "textures/blocks/conduit_cage.png"],
			["textures/entity/conduit/closed_eye.png", "textures/blocks/conduit_closed.png"],
			["textures/entity/conduit/open_eye.png", "textures/blocks/conduit_open.png"],
			["textures/entity/conduit/wind.png", "textures/blocks/conduit_wind_horizontal.png"],
			["textures/entity/conduit/wind_vertical.png", "textures/blocks/conduit_wind_vertical.png"],
			["textures/items/heart_of_the_sea.png", "textures/items/heartofthesea_closed.png"],

			// Coral
			["textures/blocks/brain_coral.png", "textures/blocks/coral_plant_pink.png"],
			["textures/blocks/bubble_coral.png", "textures/blocks/coral_plant_purple.png"],
			["textures/blocks/fire_coral.png", "textures/blocks/coral_plant_red.png"],
			["textures/blocks/horn_coral.png", "textures/blocks/coral_plant_yellow.png"],
			["textures/blocks/tube_coral.png", "textures/blocks/coral_plant_blue.png"],
			["textures/blocks/brain_coral_block.png", "textures/blocks/coral_pink.png"],
			["textures/blocks/bubble_coral_block.png", "textures/blocks/coral_purple.png"],
			["textures/blocks/fire_coral_block.png", "textures/blocks/coral_red.png"],
			["textures/blocks/horn_coral_block.png", "textures/blocks/coral_yellow.png"],
			["textures/blocks/tube_coral_block.png", "textures/blocks/coral_blue.png"],
			["textures/blocks/brain_coral_fan.png", "textures/blocks/coral_fan_pink.png"],
			["textures/blocks/bubble_coral_fan.png", "textures/blocks/coral_fan_purple.png"],
			["textures/blocks/fire_coral_fan.png", "textures/blocks/coral_fan_red.png"],
			["textures/blocks/horn_coral_fan.png", "textures/blocks/coral_fan_yellow.png"],
			["textures/blocks/tube_coral_fan.png", "textures/blocks/coral_fan_blue.png"],
			["textures/blocks/dead_brain_coral_block.png", "textures/blocks/coral_pink_dead.png"],
			["textures/blocks/dead_bubble_coral_block.png", "textures/blocks/coral_purple_dead.png"],
			["textures/blocks/dead_fire_coral_block.png", "textures/blocks/coral_red_dead.png"],
			["textures/blocks/dead_horn_coral_block.png", "textures/blocks/coral_yellow_dead.png"],
			["textures/blocks/dead_tube_coral_block.png", "textures/blocks/coral_blue_dead.png"],
			["textures/blocks/dead_brain_coral_fan.png", "textures/blocks/coral_fan_pink_dead.png"],
			["textures/blocks/dead_bubble_coral_fan.png", "textures/blocks/coral_fan_purple_dead.png"],
			["textures/blocks/dead_fire_coral_fan.png", "textures/blocks/coral_fan_red_dead.png"],
			["textures/blocks/dead_horn_coral_fan.png", "textures/blocks/coral_fan_yellow_dead.png"],
			["textures/blocks/dead_tube_coral_fan.png", "textures/blocks/coral_fan_blue_dead.png"],

			// Cow
			["textures/entity/cow/red_mooshroom.png", "textures/entity/cow/mooshroom.png"],

			// Dead bush
			["textures/blocks/dead_bush.png", "textures/blocks/deadbush.png"],

			// Destroy stage
			["textures/blocks/destroy_stage_0.png", "textures/environment/destroy_stage_0.png"],
			["textures/blocks/destroy_stage_1.png", "textures/environment/destroy_stage_1.png"],
			["textures/blocks/destroy_stage_2.png", "textures/environment/destroy_stage_2.png"],
			["textures/blocks/destroy_stage_3.png", "textures/environment/destroy_stage_3.png"],
			["textures/blocks/destroy_stage_4.png", "textures/environment/destroy_stage_4.png"],
			["textures/blocks/destroy_stage_5.png", "textures/environment/destroy_stage_5.png"],
			["textures/blocks/destroy_stage_6.png", "textures/environment/destroy_stage_6.png"],
			["textures/blocks/destroy_stage_7.png", "textures/environment/destroy_stage_7.png"],
			["textures/blocks/destroy_stage_8.png", "textures/environment/destroy_stage_8.png"],
			["textures/blocks/destroy_stage_9.png", "textures/environment/destroy_stage_9.png"],

			// Diorite
			["textures/blocks/diorite.png", "textures/blocks/stone_diorite.png"],
			["textures/blocks/polished_diorite.png", "textures/blocks/stone_diorite_smooth.png"],

			// Dispenser
			["textures/blocks/dispenser_front.png", "textures/blocks/dispenser_front_horizontal.png"],

			// Door
			["textures/blocks/acacia_door_bottom.png", "textures/blocks/door_acacia_lower.png"],
			["textures/blocks/birch_door_bottom.png", "textures/blocks/door_birch_lower.png"],
			["textures/blocks/dark_oak_door_bottom.png", "textures/blocks/door_dark_oak_lower.png"],
			["textures/blocks/iron_door_bottom.png", "textures/blocks/door_iron_lower.png"],
			["textures/blocks/jungle_door_bottom.png", "textures/blocks/door_jungle_lower.png"],
			["textures/blocks/oak_door_bottom.png", "textures/blocks/door_wood_lower.png"],
			["textures/blocks/spruce_door_bottom.png", "textures/blocks/door_spruce_lower.png"],
			["textures/blocks/acacia_door_top.png", "textures/blocks/door_acacia_upper.png"],
			["textures/blocks/birch_door_top.png", "textures/blocks/door_birch_upper.png"],
			["textures/blocks/dark_oak_door_top.png", "textures/blocks/door_dark_oak_upper.png"],
			["textures/blocks/iron_door_top.png", "textures/blocks/door_iron_upper.png"],
			["textures/blocks/jungle_door_top.png", "textures/blocks/door_jungle_upper.png"],
			["textures/blocks/oak_door_top.png", "textures/blocks/door_wood_upper.png"],
			["textures/blocks/spruce_door_top.png", "textures/blocks/door_spruce_upper.png"],
			["textures/items/acacia_door.png", "textures/items/door_acacia.png"],
			["textures/items/birch_door.png", "textures/items/door_birch.png"],
			["textures/items/dark_oak_door.png", "textures/items/door_dark_oak.png"],
			["textures/items/iron_door.png", "textures/items/door_iron.png"],
			["textures/items/jungle_door.png", "textures/items/door_jungle.png"],
			["textures/items/oak_door.png", "textures/items/door_wood.png"],
			["textures/items/spruce_door.png", "textures/items/door_spruce.png"],

			// Dragon
			["textures/entity/enderdragon/", "textures/entity/dragon/"],
			["textures/entity/dragon/dragon_fireball.png", "textures/items/dragon_fireball.png"],
			["textures/items/dragon_breath.png", "textures/items/dragons_breath.png"],
			["textures/items/fire_charge.png", "textures/items/fireball.png"],

			// Dropper
			["textures/blocks/dropper_front.png", "textures/blocks/dropper_front_horizontal.png"],

			// Dye
			["textures/items/black_dye.png", "textures/items/dye_powder_black_new.png"],
			["textures/items/blue_dye.png", "textures/items/dye_powder_blue_new.png"],
			["textures/items/brown_dye.png", "textures/items/dye_powder_brown_new.png"],
			["textures/items/cyan_dye.png", "textures/items/dye_powder_cyan.png"],
			["textures/items/gray_dye.png", "textures/items/dye_powder_gray.png"],
			["textures/items/green_dye.png", "textures/items/dye_powder_green.png"],
			["textures/items/light_blue_dye.png", "textures/items/dye_powder_light_blue.png"],
			["textures/items/light_gray_dye.png", "textures/items/dye_powder_silver.png"],
			["textures/items/lime_dye.png", "textures/items/dye_powder_lime.png"],
			["textures/items/magenta_dye.png", "textures/items/dye_powder_magenta.png"],
			["textures/items/orange_dye.png", "textures/items/dye_powder_orange.png"],
			["textures/items/pink_dye.png", "textures/items/dye_powder_pink.png"],
			["textures/items/purple_dye.png", "textures/items/dye_powder_purple.png"],
			["textures/items/red_dye.png", "textures/items/dye_powder_red.png"],
			["textures/items/white_dye.png", "textures/items/dye_powder_white_new.png"],
			["textures/items/yellow_dye.png", "textures/items/dye_powder_yellow.png"],
			["textures/items/cactus_green.png", "textures/items/dye_powder_green.png"], // 1.13
			["textures/items/dandelion_yellow.png", "textures/items/dye_powder_yellow.png"], // 1.13
			["textures/items/rose_red.png", "textures/items/dye_powder_red.png"], // 1.13

			// End crystal
			["textures/entity/end_crystal/", "textures/entity/endercrystal/"],
			["textures/entity/endercrystal/end_crystal.png", "textures/entity/endercrystal/endercrystal.png"],
			["textures/entity/endercrystal/end_crystal_beam.png", "textures/entity/endercrystal/endercrystal_beam.png"],

			// End portal
			["textures/blocks/end_portal_frame_eye.png", "textures/blocks/endframe_eye.png"],
			["textures/blocks/end_portal_frame_side.png", "textures/blocks/endframe_side.png"],
			["textures/blocks/end_portal_frame_top.png", "textures/blocks/endframe_top.png"],

			// End stone
			["textures/blocks/end_stone_bricks.png", "textures/blocks/end_bricks.png"],

			// Farmland
			["textures/blocks/farmland.png", "textures/blocks/farmland_dry.png"],
			["textures/blocks/farmland_moist.png", "textures/blocks/farmland_wet.png"],

			// Fern
			["textures/blocks/large_fern_bottom.png", "textures/blocks/double_plant_fern_bottom.png"],
			["textures/blocks/large_fern_top.png", "textures/blocks/double_plant_fern_top.png"],

			// Firework
			["textures/items/firework_rocket.png", "textures/items/fireworks.png"],
			["textures/items/firework_star_overlay.png", "textures/items/fireworks_charge.png"],

			// Fish
			["textures/entity/fishing_hook.png", "textures/entity/fishhook.png"],
			["textures/items/cod.png", "textures/items/fish_raw.png"],
			["textures/items/cooked_cod.png", "textures/items/fish_cooked.png"],
			["textures/items/cooked_salmon.png", "textures/items/fish_salmon_cooked.png"],
			["textures/items/fishing_rod.png", "textures/items/fishing_rod_uncast.png"],
			["textures/items/pufferfish.png", "textures/items/fish_pufferfish_raw.png"],
			["textures/items/salmon.png", "textures/items/fish_salmon_raw.png"],
			["textures/items/tropical_fish.png", "textures/items/fish_clownfish_raw.png"],

			// Flesh
			["textures/items/beef.png", "textures/items/beef_raw.png"],
			["textures/items/chicken.png", "textures/items/chicken_raw.png"],
			["textures/items/cooked_beef.png", "textures/items/beef_cooked.png"],
			["textures/items/cooked_chicken.png", "textures/items/chicken_cooked.png"],
			["textures/items/cooked_mutton.png", "textures/items/mutton_cooked.png"],
			["textures/items/cooked_porkchop.png", "textures/items/porkchop_cooked.png"],
			["textures/items/mutton.png", "textures/items/mutton_raw.png"],
			["textures/items/porkchop.png", "textures/items/porkchop_raw.png"],

			// Fletching table
			["textures/blocks/fletching_table_front.png", "textures/blocks/fletcher_table_side2.png"],
			["textures/blocks/fletching_table_side.png", "textures/blocks/fletcher_table_side1.png"],
			["textures/blocks/fletching_table_top.png", "textures/blocks/fletcher_table_top.png"],

			// Flower
			["textures/blocks/allium.png", "textures/blocks/flower_allium.png"],
			["textures/blocks/azure_bluet.png", "textures/blocks/flower_houstonia.png"],
			["textures/blocks/blue_orchid.png", "textures/blocks/flower_blue_orchid.png"],
			["textures/blocks/cornflower.png", "textures/blocks/flower_cornflower.png"],
			["textures/blocks/dandelion.png", "textures/blocks/flower_dandelion.png"],
			["textures/blocks/lilac_bottom.png", "textures/blocks/double_plant_syringa_bottom.png"],
			["textures/blocks/lilac_top.png", "textures/blocks/double_plant_syringa_top.png"],
			["textures/blocks/lily_of_the_valley.png", "textures/blocks/flower_lily_of_the_valley.png"],
			["textures/blocks/orange_tulip.png", "textures/blocks/flower_tulip_orange.png"],
			["textures/blocks/poppy.png", "textures/blocks/flower_rose.png"],
			["textures/blocks/oxeye_daisy.png", "textures/blocks/flower_oxeye_daisy.png"],
			["textures/blocks/peony_bottom.png", "textures/blocks/double_plant_paeonia_bottom.png"],
			["textures/blocks/peony_top.png", "textures/blocks/double_plant_paeonia_top.png"],
			["textures/blocks/pink_tulip.png", "textures/blocks/flower_tulip_pink.png"],
			["textures/blocks/red_tulip.png", "textures/blocks/flower_tulip_red.png"],
			["textures/blocks/rose_bush_bottom.png", "textures/blocks/double_plant_rose_bottom.png"],
			["textures/blocks/rose_bush_top.png", "textures/blocks/double_plant_rose_top.png"],
			["textures/blocks/sunflower_back.png", "textures/blocks/double_plant_sunflower_back.png"],
			["textures/blocks/sunflower_bottom.png", "textures/blocks/double_plant_sunflower_bottom.png"],
			["textures/blocks/sunflower_front.png", "textures/blocks/double_plant_sunflower_front.png"],
			["textures/blocks/sunflower_top.png", "textures/blocks/double_plant_sunflower_top.png"],
			["textures/blocks/white_tulip.png", "textures/blocks/flower_tulip_white.png"],
			["textures/blocks/wither_rose.png", "textures/blocks/flower_wither_rose.png"],

			// Furnace
			["textures/blocks/blast_furnace_front.png", "textures/blocks/blast_furnace_front_off.png"],
			["textures/blocks/furnace_front.png", "textures/blocks/furnace_front_off.png"],
			["textures/blocks/smoker_front.png", "textures/blocks/smoker_front_off.png"],

			// Glass
			["textures/blocks/black_stained_glass.png", "textures/blocks/glass_black.png"],
			["textures/blocks/blue_stained_glass.png", "textures/blocks/glass_blue.png"],
			["textures/blocks/brown_stained_glass.png", "textures/blocks/glass_brown.png"],
			["textures/blocks/cyan_stained_glass.png", "textures/blocks/glass_cyan.png"],
			["textures/blocks/gray_stained_glass.png", "textures/blocks/glass_gray.png"],
			["textures/blocks/green_stained_glass.png", "textures/blocks/glass_green.png"],
			["textures/blocks/light_blue_stained_glass.png", "textures/blocks/glass_light_blue.png"],
			["textures/blocks/light_gray_stained_glass.png", "textures/blocks/glass_silver.png"],
			["textures/blocks/lime_stained_glass.png", "textures/blocks/glass_lime.png"],
			["textures/blocks/magenta_stained_glass.png", "textures/blocks/glass_magenta.png"],
			["textures/blocks/orange_stained_glass.png", "textures/blocks/glass_orange.png"],
			["textures/blocks/pink_stained_glass.png", "textures/blocks/glass_pink.png"],
			["textures/blocks/purple_stained_glass.png", "textures/blocks/glass_purple.png"],
			["textures/blocks/red_stained_glass.png", "textures/blocks/glass_red.png"],
			["textures/blocks/white_stained_glass.png", "textures/blocks/glass_white.png"],
			["textures/blocks/yellow_stained_glass.png", "textures/blocks/glass_yellow.png"],

			// Glass pane
			["textures/blocks/black_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_black.png"],
			["textures/blocks/blue_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_blue.png"],
			["textures/blocks/brown_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_brown.png"],
			["textures/blocks/cyan_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_cyan.png"],
			["textures/blocks/gray_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_gray.png"],
			["textures/blocks/green_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_green.png"],
			["textures/blocks/light_blue_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_light_blue.png"],
			["textures/blocks/light_gray_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_silver.png"],
			["textures/blocks/lime_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_lime.png"],
			["textures/blocks/magenta_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_magenta.png"],
			["textures/blocks/orange_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_orange.png"],
			["textures/blocks/pink_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_pink.png"],
			["textures/blocks/purple_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_purple.png"],
			["textures/blocks/red_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_red.png"],
			["textures/blocks/white_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_white.png"],
			["textures/blocks/yellow_stained_glass_pane_top.png", "textures/blocks/glass_pane_top_yellow.png"],

			// Glazed terracotta
			["textures/blocks/black_glazed_terracotta.png", "textures/blocks/glazed_terracotta_black.png"],
			["textures/blocks/blue_glazed_terracotta.png", "textures/blocks/glazed_terracotta_blue.png"],
			["textures/blocks/brown_glazed_terracotta.png", "textures/blocks/glazed_terracotta_brown.png"],
			["textures/blocks/cyan_glazed_terracotta.png", "textures/blocks/glazed_terracotta_cyan.png"],
			["textures/blocks/gray_glazed_terracotta.png", "textures/blocks/glazed_terracotta_gray.png"],
			["textures/blocks/green_glazed_terracotta.png", "textures/blocks/glazed_terracotta_green.png"],
			["textures/blocks/light_blue_glazed_terracotta.png", "textures/blocks/glazed_terracotta_light_blue.png"],
			["textures/blocks/light_gray_glazed_terracotta.png", "textures/blocks/glazed_terracotta_silver.png"],
			["textures/blocks/lime_glazed_terracotta.png", "textures/blocks/glazed_terracotta_lime.png"],
			["textures/blocks/magenta_glazed_terracotta.png", "textures/blocks/glazed_terracotta_magenta.png"],
			["textures/blocks/orange_glazed_terracotta.png", "textures/blocks/glazed_terracotta_orange.png"],
			["textures/blocks/pink_glazed_terracotta.png", "textures/blocks/glazed_terracotta_pink.png"],
			["textures/blocks/purple_glazed_terracotta.png", "textures/blocks/glazed_terracotta_purple.png"],
			["textures/blocks/red_glazed_terracotta.png", "textures/blocks/glazed_terracotta_red.png"],
			["textures/blocks/white_glazed_terracotta.png", "textures/blocks/glazed_terracotta_white.png"],
			["textures/blocks/yellow_glazed_terracotta.png", "textures/blocks/glazed_terracotta_yellow.png"],

			// Granite
			["textures/blocks/granite.png", "textures/blocks/stone_granite.png"],
			["textures/blocks/polished_granite.png", "textures/blocks/stone_granite_smooth.png"],

			// Grass
			["textures/blocks/grass.png", "textures/blocks/tallgrass.png"],
			["textures/blocks/grass_block_side.png", "textures/blocks/grass_side_carried.png"],
			["textures/blocks/grass_block_side_overlay.png", "textures/blocks/grass_side.png"],
			["textures/blocks/grass_block_snow.png", "textures/blocks/grass_side_snowed.png"],
			["textures/blocks/grass_block_top.png", "textures/blocks/grass_top.png"],
			["textures/blocks/tall_grass_bottom.png", "textures/blocks/double_plant_grass_bottom.png"],
			["textures/blocks/tall_grass_top.png", "textures/blocks/double_plant_grass_top.png"],

			// Horse
			["textures/entity/horse/", "textures/entity/horse2/"],

			// Ice
			["textures/blocks/packed_ice.png", "textures/blocks/ice_packed.png"],

			// Illager & pillager
			["textures/entity/illager/evoker_fangs.png", "textures/entity/illager/fangs.png"],
			["textures/entity/illager/pillager.png", "textures/entity/pillager.png"],
			["textures/entity/illager/vex.png", "textures/entity/vex/vex.png"],
			["textures/entity/illager/vex_charging.png", "textures/entity/vex/vex_charging.png"],
			["textures/entity/illager/vindicator.png", "textures/entity/vindicator.png"],

			// Ink sac
			["textures/items/ink_sac.png", "textures/items/dye_powder_black.png"],

			// Item frame
			["textures/blocks/item_frame.png", "textures/blocks/itemframe_background.png"],

			// Jigsaw
			["textures/blocks/jigsaw_bottom.png", "textures/blocks/jigsaw_back.png"],
			["textures/blocks/jigsaw_top.png", "textures/blocks/jigsaw_front.png"],

			// Kelp
			["textures/blocks/dried_kelp_side.png", "textures/blocks/dried_kelp_side_a.png"],
			["textures/blocks/kelp.png", "textures/blocks/kelp_top.png"],
			["textures/blocks/kelp_plant.png", "textures/blocks/kelp_a.png"],

			// Lapis lazuli
			["textures/items/lapis_lazuli.png", "textures/items/dye_powder_blue.png"],

			// Leaves
			["textures/blocks/acacia_leaves.png", "textures/blocks/leaves_acacia.png"],
			["textures/blocks/birch_leaves.png", "textures/blocks/leaves_birch.png"],
			["textures/blocks/dark_oak_leaves.png", "textures/blocks/leaves_big_oak.png"],
			["textures/blocks/jungle_leaves.png", "textures/blocks/leaves_jungle.png"],
			["textures/blocks/oak_leaves.png", "textures/blocks/leaves_oak.png"],
			["textures/blocks/spruce_leaves.png", "textures/blocks/leaves_spruce.png"],

			// Lily Pad
			["textures/blocks/lily_pad.png", "textures/blocks/waterlily.png"],

			// Llama
			["textures/entity/llama/brown.png", "textures/entity/llama/llama_brown.png"],
			["textures/entity/llama/creamy.png", "textures/entity/llama/llama_creamy.png"],
			["textures/entity/llama/gray.png", "textures/entity/llama/llama_gray.png"],
			["textures/entity/llama/white.png", "textures/entity/llama/llama_white.png"],
			["textures/entity/llama/decor/black.png", "textures/entity/llama/decor/decor_black.png"],
			["textures/entity/llama/decor/blue.png", "textures/entity/llama/decor/decor_blue.png"],
			["textures/entity/llama/decor/brown.png", "textures/entity/llama/decor/decor_brown.png"],
			["textures/entity/llama/decor/cyan.png", "textures/entity/llama/decor/decor_cyan.png"],
			["textures/entity/llama/decor/gray.png", "textures/entity/llama/decor/decor_gray.png"],
			["textures/entity/llama/decor/green.png", "textures/entity/llama/decor/decor_green.png"],
			["textures/entity/llama/decor/light_blue.png", "textures/entity/llama/decor/decor_light_blue.png"],
			["textures/entity/llama/decor/light_gray.png", "textures/entity/llama/decor/decor_silver.png"],
			["textures/entity/llama/decor/lime.png", "textures/entity/llama/decor/decor_lime.png"],
			["textures/entity/llama/decor/magenta.png", "textures/entity/llama/decor/decor_magenta.png"],
			["textures/entity/llama/decor/orange.png", "textures/entity/llama/decor/decor_orange.png"],
			["textures/entity/llama/decor/pink.png", "textures/entity/llama/decor/decor_pink.png"],
			["textures/entity/llama/decor/purple.png", "textures/entity/llama/decor/decor_purple.png"],
			["textures/entity/llama/decor/red.png", "textures/entity/llama/decor/decor_red.png"],
			["textures/entity/llama/decor/trader_llama.png", "textures/entity/llama/decor/trader_llama_decor.png"],
			["textures/entity/llama/decor/white.png", "textures/entity/llama/decor/decor_white.png"],
			["textures/entity/llama/decor/yellow.png", "textures/entity/llama/decor/decor_yellow.png"],

			// Log
			["textures/blocks/acacia_log.png", "textures/blocks/log_acacia.png"],
			["textures/blocks/birch_log.png", "textures/blocks/log_birch.png"],
			["textures/blocks/dark_oak_log.png", "textures/blocks/log_big_oak.png"],
			["textures/blocks/jungle_log.png", "textures/blocks/log_jungle.png"],
			["textures/blocks/oak_log.png", "textures/blocks/log_oak.png"],
			["textures/blocks/spruce_log.png", "textures/blocks/log_spruce.png"],

			// Log top
			["textures/blocks/acacia_log_top.png", "textures/blocks/log_acacia_top.png"],
			["textures/blocks/birch_log_top.png", "textures/blocks/log_birch_top.png"],
			["textures/blocks/dark_oak_log_top.png", "textures/blocks/log_big_oak_top.png"],
			["textures/blocks/jungle_log_top.png", "textures/blocks/log_jungle_top.png"],
			["textures/blocks/oak_log_top.png", "textures/blocks/log_oak_top.png"],
			["textures/blocks/spruce_log_top.png", "textures/blocks/log_spruce_top.png"],

			// Map
			["textures/items/filled_map.png", "textures/items/map_filled.png"],
			["textures/items/filled_map_markings.png", "textures/items/map_filled_markings.png"],
			["textures/items/map.png", "textures/items/map_empty.png"],

			// Melon
			["textures/blocks/attached_melon_stem.png", "textures/blocks/melon_stem_connected.png"],
			["textures/blocks/melon_stem.png", "textures/blocks/melon_stem_disconnected.png"],
			["textures/items/glistering_melon_slice.png", "textures/items/melon_speckled.png"],
			["textures/items/melon_slice.png", "textures/items/melon.png"],

			// Minecart
			["textures/items/chest_minecart.png", "textures/items/minecart_chest.png"],
			["textures/items/command_block_minecart.png", "textures/items/minecart_command_block.png"],
			["textures/items/furnace_minecart.png", "textures/items/minecart_furnace.png"],
			["textures/items/hopper_minecart.png", "textures/items/minecart_hopper.png"],
			["textures/items/minecart.png", "textures/items/minecart_normal.png"],
			["textures/items/tnt_minecart.png", "textures/items/minecart_tnt.png"],

			// Mob effect
			["textures/mob_effect/absorption.png", "textures/ui/absorption_effect.png"],
			["textures/mob_effect/bad_omen.png", "textures/ui/bad_omen_effect.png"],
			["textures/mob_effect/blindness.png", "textures/ui/blindness_effect.png"],
			["textures/mob_effect/conduit_power.png", "textures/ui/conduit_power_effect.png"],
			["textures/mob_effect/dolphins_grace.png", "textures/ui/dolphins_grace_effect.png"],
			["textures/mob_effect/fire_resistance.png", "textures/ui/fire_resistance_effect.png"],
			["textures/mob_effect/glowing.png", "textures/ui/glowing_effect.png"],
			["textures/mob_effect/haste.png", "textures/ui/haste_effect.png"],
			["textures/mob_effect/health_boost.png", "textures/ui/health_boost_effect.png"],
			["textures/mob_effect/hero_of_the_village.png", "textures/ui/village_hero_effect.png"],
			["textures/mob_effect/hunger.png", "textures/ui/hunger_effect.png"],
			["textures/mob_effect/instant_damage.png", "textures/ui/instant_damage_effect.png"],
			["textures/mob_effect/instant_health.png", "textures/ui/instant_health_effect.png"],
			["textures/mob_effect/invisibility.png", "textures/ui/invisibility_effect.png"],
			["textures/mob_effect/jump_boost.png", "textures/ui/jump_boost_effect.png"],
			["textures/mob_effect/levitation.png", "textures/ui/levitation_effect.png"],
			["textures/mob_effect/luck.png", "textures/ui/luck_effect.png"],
			["textures/mob_effect/mining_fatigue.png", "textures/ui/mining_fatigue_effect.png"],
			["textures/mob_effect/nausea.png", "textures/ui/nausea_effect.png"],
			["textures/mob_effect/night_vision.png", "textures/ui/night_vision_effect.png"],
			["textures/mob_effect/poison.png", "textures/ui/poison_effect.png"],
			["textures/mob_effect/regeneration.png", "textures/ui/regeneration_effect.png"],
			["textures/mob_effect/resistance.png", "textures/ui/resistance_effect.png"],
			["textures/mob_effect/saturation.png", "textures/ui/saturation_effect.png"],
			["textures/mob_effect/slow_falling.png", "textures/ui/slow_falling_effect.png"],
			["textures/mob_effect/slowness.png", "textures/ui/slowness_effect.png"],
			["textures/mob_effect/speed.png", "textures/ui/speed_effect.png"],
			["textures/mob_effect/strength.png", "textures/ui/strength_effect.png"],
			["textures/mob_effect/unluck.png", "textures/ui/unluck_effect.png"],
			["textures/mob_effect/water_breathing.png", "textures/ui/water_breathing_effect.png"],
			["textures/mob_effect/weakness.png", "textures/ui/weakness_effect.png"],
			["textures/mob_effect/wither.png", "textures/ui/wither_effect.png"],
				
			// Mushroom
			["textures/blocks/brown_mushroom.png", "textures/blocks/mushroom_brown.png"],
			["textures/blocks/red_mushroom.png", "textures/blocks/mushroom_red.png"],
			["textures/blocks/brown_mushroom_block.png", "textures/blocks/mushroom_block_skin_brown.png"],
			["textures/blocks/red_mushroom_block.png", "textures/blocks/mushroom_block_skin_red.png"],
			["textures/blocks/mushroom_stem.png", "textures/blocks/mushroom_block_skin_stem.png"],

			// Music disc
			["textures/items/music_disc_11.png", "textures/items/record_11.png"],
			["textures/items/music_disc_13.png", "textures/items/record_13.png"],
			["textures/items/music_disc_blocks.png", "textures/items/record_blocks.png"],
			["textures/items/music_disc_cat.png", "textures/items/record_cat.png"],
			["textures/items/music_disc_chirp.png", "textures/items/record_chirp.png"],
			["textures/items/music_disc_far.png", "textures/items/record_far.png"],
			["textures/items/music_disc_mall.png", "textures/items/record_mall.png"],
			["textures/items/music_disc_mellohi.png", "textures/items/record_mellohi.png"],
			["textures/items/music_disc_stal.png", "textures/items/record_stal.png"],
			["textures/items/music_disc_strad.png", "textures/items/record_strad.png"],
			["textures/items/music_disc_wait.png", "textures/items/record_wait.png"],
			["textures/items/music_disc_ward.png", "textures/items/record_ward.png"],

			// Nether brick
			["textures/blocks/nether_bricks.png", "textures/blocks/nether_brick.png"],
			["textures/blocks/red_nether_bricks.png", "textures/blocks/red_nether_brick.png"],
			["textures/items/nether_brick.png", "textures/items/netherbrick.png"],

			// Nether portal
			["textures/blocks/nether_portal.png", "textures/blocks/portal.png"],

			// Nether wart
			["textures/blocks/nether_wart_stage0.png", "textures/blocks/nether_wart_stage_0.png"],
			["textures/blocks/nether_wart_stage1.png", "textures/blocks/nether_wart_stage_1.png"],
			["textures/blocks/nether_wart_stage2.png", "textures/blocks/nether_wart_stage_2.png"],

			// Note block
			["textures/blocks/note_block.png", "textures/blocks/noteblock.png"],

			// Nautilus shell
			["textures/items/nautilus_shell.png", "textures/items/nautilus.png"],

			// Observer
			["textures/blocks/observer_back_on.png", "textures/blocks/observer_back_lit.png"],

			// Painting
			["textures/painting/paintings_kristoffer_zetterstrand.png", "textures/painting/kz.png"], // 1.13

			// Panda
			["textures/entity/panda/aggressive_panda.png", "textures/entity/panda/panda_aggressive.png"],
			["textures/entity/panda/brown_panda.png", "textures/entity/panda/panda_brown.png"],
			["textures/entity/panda/lazy_panda.png", "textures/entity/panda/panda_lazy.png"],
			["textures/entity/panda/playful_panda.png", "textures/entity/panda/panda_playful.png"],
			["textures/entity/panda/weak_panda.png", "textures/entity/panda/panda_sneezy.png"],
			["textures/entity/panda/worried_panda.png", "textures/entity/panda/panda_worried.png"],

			// Piston
			["textures/blocks/piston_top.png", "textures/blocks/piston_top_normal.png"],

			// Planks
			["textures/blocks/acacia_planks.png", "textures/blocks/planks_acacia.png"],
			["textures/blocks/birch_planks.png", "textures/blocks/planks_birch.png"],
			["textures/blocks/dark_oak_planks.png", "textures/blocks/planks_big_oak.png"],
			["textures/blocks/jungle_planks.png", "textures/blocks/planks_jungle.png"],
			["textures/blocks/oak_planks.png", "textures/blocks/planks_oak.png"],
			["textures/blocks/spruce_planks.png", "textures/blocks/planks_spruce.png"],

			// Podzol
			["textures/blocks/podzol_side.png", "textures/blocks/dirt_podzol_side.png"],
			["textures/blocks/podzol_top.png", "textures/blocks/dirt_podzol_top.png"],

			// Potato
			["textures/blocks/potatoes_stage0.png", "textures/blocks/potatoes_stage_0.png"],
			["textures/blocks/potatoes_stage1.png", "textures/blocks/potatoes_stage_1.png"],
			["textures/blocks/potatoes_stage2.png", "textures/blocks/potatoes_stage_2.png"],
			["textures/blocks/potatoes_stage3.png", "textures/blocks/potatoes_stage_3.png"],
			["textures/items/baked_potato.png", "textures/items/potato_baked.png"],
			["textures/items/poisonous_potato.png", "textures/items/potato_poisonous.png"],

			// Potion
			["textures/items/lingering_potion.png", "textures/items/potion_bottle_lingering_empty.png"],
			["textures/items/potion.png", "textures/items/potion_bottle_empty.png"],
			["textures/items/splash_potion.png", "textures/items/potion_bottle_splash_empty.png"],

			// Prismarine
			["textures/blocks/dark_prismarine.png", "textures/blocks/prismarine_dark.png"],
			["textures/blocks/prismarine.png", "textures/blocks/prismarine_rough.png"],

			// Pumpkin
			["textures/blocks/attached_pumpkin_stem.png", "textures/blocks/pumpkin_stem_connected.png"],
			["textures/blocks/carved_pumpkin.png", "textures/blocks/pumpkin_face_off.png"],
			["textures/blocks/jack_o_lantern.png", "textures/blocks/pumpkin_face_on.png"],
			["textures/blocks/pumpkin_stem.png", "textures/blocks/pumpkin_stem_disconnected.png"],

			// Quartz
			["textures/blocks/chiseled_quartz_block.png", "textures/blocks/quartz_block_chiseled.png"],
			["textures/blocks/chiseled_quartz_block_top.png", "textures/blocks/quartz_block_chiseled_top.png"],
			["textures/blocks/nether_quartz_ore.png", "textures/blocks/quartz_ore.png"],
			["textures/blocks/quartz_pillar.png", "textures/blocks/quartz_block_lines.png"],
			["textures/blocks/quartz_pillar_top.png", "textures/blocks/quartz_block_lines_top.png"],

			// Rabbit
			["textures/entity/rabbit/black.png", "textures/entity/rabbit/blackrabbit.png"],
			["textures/items/cooked_rabbit.png", "textures/items/rabbit_cooked.png"],
			["textures/items/rabbit.png", "textures/items/rabbit_raw.png"],

			// Rail
			["textures/blocks/activator_rail.png", "textures/blocks/rail_activator.png"],
			["textures/blocks/activator_rail_on.png", "textures/blocks/rail_activator_powered.png"],
			["textures/blocks/detector_rail.png", "textures/blocks/rail_detector.png"],
			["textures/blocks/detector_rail_on.png", "textures/blocks/rail_detector_powered.png"],
			["textures/blocks/powered_rail.png", "textures/blocks/rail_golden.png"],
			["textures/blocks/powered_rail_on.png", "textures/blocks/rail_golden_powered.png"],
			["textures/blocks/rail.png", "textures/blocks/rail_normal.png"],
			["textures/blocks/rail_corner.png", "textures/blocks/rail_normal_turned.png"],

			// Red sand
			["textures/blocks/chiseled_red_sandstone.png", "textures/blocks/red_sandstone_carved.png"],
			["textures/blocks/cut_red_sandstone.png", "textures/blocks/red_sandstone_smooth.png"],
			["textures/blocks/red_sandstone.png", "textures/blocks/red_sandstone_normal.png"],

			// Redstone
			["textures/items/redstone.png", "textures/items/redstone_dust.png"],

			// Redstone lamp
			["textures/blocks/redstone_lamp.png", "textures/blocks/redstone_lamp_off.png"],

			// Repeater
			["textures/blocks/repeater.png", "textures/blocks/repeater_off.png"],

			// Saddle
			["textures/entity/pig/pig_saddle.png", "textures/entity/saddle.png"],

			// Sand
			["textures/blocks/chiseled_sandstone.png", "textures/blocks/sandstone_carved.png"],
			["textures/blocks/cut_sandstone.png", "textures/blocks/sandstone_smooth.png"],
			["textures/blocks/sandstone.png", "textures/blocks/sandstone_normal.png"],

			// Sapling
			["textures/blocks/acacia_sapling.png", "textures/blocks/sapling_acacia.png"],
			["textures/blocks/birch_sapling.png", "textures/blocks/sapling_birch.png"],
			["textures/blocks/dark_oak_sapling.png", "textures/blocks/sapling_roofed_oak.png"],
			["textures/blocks/jungle_sapling.png", "textures/blocks/sapling_jungle.png"],
			["textures/blocks/oak_sapling.png", "textures/blocks/sapling_oak.png"],
			["textures/blocks/spruce_sapling.png", "textures/blocks/sapling_spruce.png"],

			// Sea grass
			["textures/blocks/tall_seagrass_top.png", "textures/blocks/seagrass_doubletall_top_a.png"],
			["textures/blocks/tall_seagrass_bottom.png", "textures/blocks/seagrass_doubletall_bottom_a.png"],
			["textures/items/seagrass.png", "textures/blocks/seagrass_carried.png"],

			// Seed
			["textures/items/beetroot_seeds.png", "textures/items/seeds_beetroot.png"],
			["textures/items/melon_seeds.png", "textures/items/seeds_melon.png"],
			["textures/items/pumpkin_seeds.png", "textures/items/seeds_pumpkin.png"],
			["textures/items/wheat_seeds.png", "textures/items/seeds_wheat.png"],

			// Shield
			["textures/entity/shield_base_nopattern.png", "textures/entity/shield.png"],

			// Shulker
			["textures/blocks/black_shulker_box.png", "textures/blocks/shulker_top_black.png"],
			["textures/blocks/blue_shulker_box.png", "textures/blocks/shulker_top_blue.png"],
			["textures/blocks/brown_shulker_box.png", "textures/blocks/shulker_top_brown.png"],
			["textures/blocks/cyan_shulker_box.png", "textures/blocks/shulker_top_cyan.png"],
			["textures/blocks/gray_shulker_box.png", "textures/blocks/shulker_top_gray.png"],
			["textures/blocks/green_shulker_box.png", "textures/blocks/shulker_top_green.png"],
			["textures/blocks/light_blue_shulker_box.png", "textures/blocks/shulker_top_light_blue.png"],
			["textures/blocks/light_gray_shulker_box.png", "textures/blocks/shulker_top_silver.png"],
			["textures/blocks/lime_shulker_box.png", "textures/blocks/shulker_top_lime.png"],
			["textures/blocks/magenta_shulker_box.png", "textures/blocks/shulker_top_magenta.png"],
			["textures/blocks/orange_shulker_box.png", "textures/blocks/shulker_top_orange.png"],
			["textures/blocks/pink_shulker_box.png", "textures/blocks/shulker_top_pink.png"],
			["textures/blocks/purple_shulker_box.png", "textures/blocks/shulker_top_purple.png"],
			["textures/blocks/red_shulker_box.png", "textures/blocks/shulker_top_red.png"],
			["textures/blocks/shulker_box.png", "textures/blocks/shulker_top_undyed.png"],
			["textures/blocks/white_shulker_box.png", "textures/blocks/shulker_top_white.png"],
			["textures/blocks/yellow_shulker_box.png", "textures/blocks/shulker_top_yellow.png"],
			["textures/entity/shulker/shulker.png", "textures/entity/shulker/shulker_undyed.png"],
			["textures/entity/shulker/shulker_black.png", "textures/entity/shulker/shulker_black.png"],
			["textures/entity/shulker/shulker_blue.png", "textures/entity/shulker/shulker_blue.png"],
			["textures/entity/shulker/shulker_brown.png", "textures/entity/shulker/shulker_brown.png"],
			["textures/entity/shulker/shulker_cyan.png", "textures/entity/shulker/shulker_cyan.png"],
			["textures/entity/shulker/shulker_gray.png", "textures/entity/shulker/shulker_gray.png"],
			["textures/entity/shulker/shulker_green.png", "textures/entity/shulker/shulker_green.png"],
			["textures/entity/shulker/shulker_light_blue.png", "textures/entity/shulker/shulker_light_blue.png"],
			["textures/entity/shulker/shulker_light_gray.png", "textures/entity/shulker/shulker_silver.png"],
			["textures/entity/shulker/shulker_lime.png", "textures/entity/shulker/shulker_lime.png"],
			["textures/entity/shulker/shulker_magenta.png", "textures/entity/shulker/shulker_magenta.png"],
			["textures/entity/shulker/shulker_orange.png", "textures/entity/shulker/shulker_orange.png"],
			["textures/entity/shulker/shulker_pink.png", "textures/entity/shulker/shulker_pink.png"],
			["textures/entity/shulker/shulker_purple.png", "textures/entity/shulker/shulker_purple.png"],
			["textures/entity/shulker/shulker_red.png", "textures/entity/shulker/shulker_red.png"],
			["textures/entity/shulker/shulker_white.png", "textures/entity/shulker/shulker_white.png"],
			["textures/entity/shulker/shulker_yellow.png", "textures/entity/shulker/shulker_yellow.png"],

			// Sign
			["textures/entity/signs/acacia.png", "textures/entity/sign_acacia.png"],
			["textures/entity/signs/birch.png", "textures/entity/sign_birch.png"],
			["textures/entity/signs/dark_oak.png", "textures/entity/sign_darkoak.png"],
			["textures/entity/signs/jungle.png", "textures/entity/sign_jungle.png"],
			["textures/entity/signs/oak.png", "textures/entity/sign.png"],
			["textures/entity/signs/spruce.png", "textures/entity/sign_spruce.png"],
			["textures/items/acacia_sign.png", "textures/items/sign_acacia.png"],
			["textures/items/birch_sign.png", "textures/items/sign_birch.png"],
			["textures/items/dark_oak_sign.png", "textures/items/sign_darkoak.png"],
			["textures/items/jungle_sign.png", "textures/items/sign_jungle.png"],
			["textures/items/oak_sign.png", "textures/items/sign.png"],
			["textures/items/spruce_sign.png", "textures/items/sign_spruce.png"],

			// Slime
			["textures/blocks/slime_block.png", "textures/blocks/slime.png"],
			["textures/items/slime_ball.png", "textures/items/slimeball.png"],

			// Smooth stone
			["textures/blocks/smooth_stone.png", "textures/blocks/stone_slab_top.png"],
			["textures/blocks/smooth_stone_slab_side.png", "textures/blocks/stone_slab_side.png"],

			// Spawner
			["textures/blocks/spawner.png", "textures/blocks/mob_spawner.png"],

			// Spider
			["textures/items/fermented_spider_eye.png", "textures/items/spider_eye_fermented.png"],

			// Sponge
			["textures/blocks/wet_sponge.png", "textures/blocks/sponge_wet.png"],

			// Stone brick
			["textures/blocks/chiseled_stone_bricks.png", "textures/blocks/stonebrick_carved.png"],
			["textures/blocks/cracked_stone_bricks.png", "textures/blocks/stonebrick_cracked.png"],
			["textures/blocks/mossy_stone_bricks.png", "textures/blocks/stonebrick_mossy.png"],
			["textures/blocks/stone_bricks.png", "textures/blocks/stonebrick.png"],

			// Stone cutter
			["textures/blocks/stonecutter_bottom.png", "textures/blocks/stonecutter2_bottom.png"],
			["textures/blocks/stonecutter_saw.png", "textures/blocks/stonecutter2_saw.png"],
			["textures/blocks/stonecutter_side.png", "textures/blocks/stonecutter2_side.png"],
			["textures/blocks/stonecutter_top.png", "textures/blocks/stonecutter2_top.png"],

			// Structure
			["textures/items/structure_void.png", "textures/blocks/structure_void.png"],

			// Sugar cane
			["textures/blocks/sugar_cane.png", "textures/blocks/reeds.png"],
			["textures/items/sugar_cane.png", "textures/items/reeds.png"],

			// Terracotta
			["textures/blocks/black_terracotta.png", "textures/blocks/hardened_clay_stained_black.png"],
			["textures/blocks/blue_terracotta.png", "textures/blocks/hardened_clay_stained_blue.png"],
			["textures/blocks/brown_terracotta.png", "textures/blocks/hardened_clay_stained_brown.png"],
			["textures/blocks/cyan_terracotta.png", "textures/blocks/hardened_clay_stained_cyan.png"],
			["textures/blocks/gray_terracotta.png", "textures/blocks/hardened_clay_stained_gray.png"],
			["textures/blocks/green_terracotta.png", "textures/blocks/hardened_clay_stained_green.png"],
			["textures/blocks/light_blue_terracotta.png", "textures/blocks/hardened_clay_stained_light_blue.png"],
			["textures/blocks/light_gray_terracotta.png", "textures/blocks/hardened_clay_stained_silver.png"],
			["textures/blocks/lime_terracotta.png", "textures/blocks/hardened_clay_stained_lime.png"],
			["textures/blocks/magenta_terracotta.png", "textures/blocks/hardened_clay_stained_magenta.png"],
			["textures/blocks/orange_terracotta.png", "textures/blocks/hardened_clay_stained_orange.png"],
			["textures/blocks/pink_terracotta.png", "textures/blocks/hardened_clay_stained_pink.png"],
			["textures/blocks/purple_terracotta.png", "textures/blocks/hardened_clay_stained_purple.png"],
			["textures/blocks/red_terracotta.png", "textures/blocks/hardened_clay_stained_red.png"],
			["textures/blocks/terracotta.png", "textures/blocks/hardened_clay.png"],
			["textures/blocks/white_terracotta.png", "textures/blocks/hardened_clay_stained_white.png"],
			["textures/blocks/yellow_terracotta.png", "textures/blocks/hardened_clay_stained_yellow.png"],

			// Torch
			["textures/blocks/redstone_torch.png", "textures/blocks/redstone_torch_on.png"],
			["textures/blocks/torch.png", "textures/blocks/torch_on.png"],

			// Totem of undying
			["textures/items/totem_of_undying.png", "textures/items/totem.png"],

			// Trapdoor
			["textures/blocks/oak_trapdoor.png", "textures/blocks/trapdoor.png"],

			// Tripwire
			["textures/blocks/tripwire.png", "textures/blocks/trip_wire.png"],
			["textures/blocks/tripwire_hook.png", "textures/blocks/trip_wire_source.png"],

			// Turtle
			["textures/blocks/turtle_egg.png", "textures/blocks/turtle_egg_not_cracked.png"],
			["textures/entity/turtle/big_sea_turtle.png", "textures/entity/sea_turtle.png"],
			["textures/items/scute.png", "textures/items/turtle_shell_piece.png"],

			// UI
			["textures/gui/options_background.png", "textures/gui/background.png"],
			["textures/gui/title/background/", "textures/gui/background/"],

			// Villager
			["textures/entity/villager/", "textures/entity/villager2/"],
			["textures/entity/villager2/profession/", "textures/entity/villager2/professions/"],
			["textures/entity/villager2/profession_level/", "textures/entity/villager2/levels/"],
			["textures/entity/villager2/type/", "textures/entity/villager2/biomes/"],
			["textures/entity/villager2/biomes/desert.png", "textures/entity/villager2/biomes/biome_desert.png"],
			["textures/entity/villager2/biomes/jungle.png", "textures/entity/villager2/biomes/biome_jungle.png"],
			["textures/entity/villager2/biomes/plains.png", "textures/entity/villager2/biomes/biome_plains.png"],
			["textures/entity/villager2/biomes/savanna.png", "textures/entity/villager2/biomes/biome_savanna.png"],
			["textures/entity/villager2/biomes/snow.png", "textures/entity/villager2/biomes/biome_snow.png"],
			["textures/entity/villager2/biomes/swamp.png", "textures/entity/villager2/biomes/biome_swamp.png"],
			["textures/entity/villager2/biomes/taiga.png", "textures/entity/villager2/biomes/biome_taiga.png"],
			["textures/entity/villager2/levels/diamond.png", "textures/entity/villager2/levels/level_diamond.png"],
			["textures/entity/villager2/levels/emerald.png", "textures/entity/villager2/levels/level_emerald.png"],
			["textures/entity/villager2/levels/gold.png", "textures/entity/villager2/levels/level_gold.png"],
			["textures/entity/villager2/levels/iron.png", "textures/entity/villager2/levels/level_iron.png"],
			["textures/entity/villager2/levels/stone.png", "textures/entity/villager2/levels/level_stone.png"],
			["textures/entity/villager2/professions/mason.png", "textures/entity/villager2/professions/stonemason.png"],

			// Water
			["textures/blocks/water_flow.png", "textures/blocks/water_flow_grey.png"],
			["textures/blocks/water_still.png", "textures/blocks/water_still_grey.png"],

			// Wheat
			["textures/blocks/wheat_stage0.png", "textures/blocks/wheat_stage_0.png"],
			["textures/blocks/wheat_stage1.png", "textures/blocks/wheat_stage_1.png"],
			["textures/blocks/wheat_stage2.png", "textures/blocks/wheat_stage_2.png"],
			["textures/blocks/wheat_stage3.png", "textures/blocks/wheat_stage_3.png"],
			["textures/blocks/wheat_stage4.png", "textures/blocks/wheat_stage_4.png"],
			["textures/blocks/wheat_stage5.png", "textures/blocks/wheat_stage_5.png"],
			["textures/blocks/wheat_stage6.png", "textures/blocks/wheat_stage_6.png"],
			["textures/blocks/wheat_stage7.png", "textures/blocks/wheat_stage_7.png"],

			// Wither
			["textures/entity/wither/", "textures/entity/wither_boss/"],

			// Wool
			["textures/blocks/black_wool.png", "textures/blocks/wool_colored_black.png"],
			["textures/blocks/blue_wool.png", "textures/blocks/wool_colored_blue.png"],
			["textures/blocks/brown_wool.png", "textures/blocks/wool_colored_brown.png"],
			["textures/blocks/cyan_wool.png", "textures/blocks/wool_colored_cyan.png"],
			["textures/blocks/gray_wool.png", "textures/blocks/wool_colored_gray.png"],
			["textures/blocks/green_wool.png", "textures/blocks/wool_colored_green.png"],
			["textures/blocks/light_blue_wool.png", "textures/blocks/wool_colored_light_blue.png"],
			["textures/blocks/light_gray_wool.png", "textures/blocks/wool_colored_silver.png"],
			["textures/blocks/lime_wool.png", "textures/blocks/wool_colored_lime.png"],
			["textures/blocks/magenta_wool.png", "textures/blocks/wool_colored_magenta.png"],
			["textures/blocks/orange_wool.png", "textures/blocks/wool_colored_orange.png"],
			["textures/blocks/pink_wool.png", "textures/blocks/wool_colored_pink.png"],
			["textures/blocks/purple_wool.png", "textures/blocks/wool_colored_purple.png"],
			["textures/blocks/red_wool.png", "textures/blocks/wool_colored_red.png"],
			["textures/blocks/white_wool.png", "textures/blocks/wool_colored_white.png"],
			["textures/blocks/yellow_wool.png", "textures/blocks/wool_colored_yellow.png"],

			// Zombie
			["textures/entity/zombie_pigman.png", "textures/entity/pig/pigzombie.png"],
			["textures/entity/zombie_villager/", "textures/entity/zombie_villager2/"],
			["textures/entity/zombie_villager2/profession/", "textures/entity/zombie_villager2/professions/"],
			["textures/entity/zombie_villager2/profession_level/", "textures/entity/zombie_villager2/levels/"],
			["textures/entity/zombie_villager2/type/", "textures/entity/zombie_villager2/biomes/"],
			["textures/entity/zombie_villager2/zombie_villager.png", "textures/entity/zombie_villager2/zombie-villager.png"],
			["textures/entity/zombie_villager2/biomes/desert.png", "textures/entity/zombie_villager2/biomes/biome-desert-zombie.png"],
			["textures/entity/zombie_villager2/biomes/jungle.png", "textures/entity/zombie_villager2/biomes/biome-jungle-zombie.png"],
			["textures/entity/zombie_villager2/biomes/plains.png", "textures/entity/zombie_villager2/biomes/biome-plains-zombie.png"],
			["textures/entity/zombie_villager2/biomes/savanna.png", "textures/entity/zombie_villager2/biomes/biome-savanna-zombie.png"],
			["textures/entity/zombie_villager2/biomes/snow.png", "textures/entity/zombie_villager2/biomes/biome-snow-zombie.png"],
			["textures/entity/zombie_villager2/biomes/swamp.png", "textures/entity/zombie_villager2/biomes/biome-swamp-zombie.png"],
			["textures/entity/zombie_villager2/biomes/taiga.png", "textures/entity/zombie_villager2/biomes/biome-taiga-zombie.png"],
			["textures/entity/zombie_villager2/levels/diamond.png", "textures/entity/zombie_villager2/levels/level_diamond.png"],
			["textures/entity/zombie_villager2/levels/emerald.png", "textures/entity/zombie_villager2/levels/level_emerald.png"],
			["textures/entity/zombie_villager2/levels/gold.png", "textures/entity/zombie_villager2/levels/level_gold.png"],
			["textures/entity/zombie_villager2/levels/iron.png", "textures/entity/zombie_villager2/levels/level_iron.png"],
			["textures/entity/zombie_villager2/levels/stone.png", "textures/entity/zombie_villager2/levels/level_stone.png"],
			["textures/entity/zombie_villager2/professions/mason.png", "textures/entity/zombie_villager2/professions/stonemason.png"]
		];
	}
}

export {RenameConverter};
