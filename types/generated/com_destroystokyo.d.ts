//@ts-nocheck

declare module 'com.destroystokyo.paper' {

/** Represents a namespaced resource, see NamespacedKey for single elements
 or NamespacedTag for a collection of elements

 Namespaces may only contain lowercase alphanumeric characters, periods,
 underscores, and hyphens.
 
 Keys may only contain lowercase alphanumeric characters, periods,
 underscores, hyphens, and forward slashes.
 
 You should not be implementing this interface yourself, use NamespacedKey
 or NamespacedTag as needed instead. */

  export class Namespaced {
key: string;
namespace: string;
/** Gets the key corresponding to this resource
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, hyphens, and forward slashes. */
getKey(): string;
/** Gets the namespace this resource is a part of
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, and hyphens. */
getNamespace(): string;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { ParticleBuilder as com_destroystokyo_paper_ParticleBuilder } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Location as org_bukkit_Location, World as org_bukkit_World, Particle as org_bukkit_Particle, Color as org_bukkit_Color } from 'org.bukkit';
import { List as java_util_List, Collection as java_util_Collection } from 'java.util';
/** Helps prepare a particle to be sent to players.

 Usage of the builder is preferred over the super long World.spawnParticle(Particle, Location, int, double, double, double, double, Object) API */

  export class ParticleBuilder extends java_lang_Object {
particle: org_bukkit_Particle;
receivers: java_util_List<org_bukkit_entity_Player>;
source: org_bukkit_entity_Player;
location: org_bukkit_Location;
count: number;
offsetX: number;
offsetY: number;
offsetZ: number;
extra: number;
data: java_lang_Object;
force: boolean;
/** Sets whether the particle is forcefully shown to the player. If forced, the particle will show
 faraway, as far as the player's view distance allows. If false, the particle will show
 according to the client's particle settings. */
force(force: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle offset. Varies by particle on how this is used */
offset(offsetX: number, offsetY: number, offsetZ: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the number of particles to spawn */
count(count: number): com_destroystokyo_paper_ParticleBuilder;
count(): number;
/** Gets the particle custom data. Varies by particle on how this is used */
data<T extends java_lang_Object>(): T | null;
/** Sets the particle custom data. Varies by particle on how this is used */
data<T extends java_lang_Object>(data: T | null): com_destroystokyo_paper_ParticleBuilder | null;
source(): org_bukkit_entity_Player | null;
/** Sets the source of this particle for visibility concerns (Vanish API) */
source(source: org_bukkit_entity_Player | null): com_destroystokyo_paper_ParticleBuilder | null;
location(): org_bukkit_Location | null;
/** Sets the location of where to spawn the particle */
location(world: org_bukkit_World, x: number, y: number, z: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the location of where to spawn the particle */
location(location: org_bukkit_Location): com_destroystokyo_paper_ParticleBuilder;
/** Gets the Particle extra data. Varies by particle on how this is used */
extra(): number;
/** Sets the particle extra data. Varies by particle on how this is used */
extra(extra: number): com_destroystokyo_paper_ParticleBuilder;
/** Sends this particle to all players in the world. This is rather silly and you should likely not
 be doing this.

 Just be a logical person and use receivers by radius or collection. */
allPlayers(): com_destroystokyo_paper_ParticleBuilder;
/** Example use:

 builder.receivers(16); if (builder.hasReceivers()) { sendParticleAsync(builder); } */
hasReceivers(): boolean;
/** Sends the particle to all receiving players (or all). This method is safe to use
 Asynchronously */
spawn(): com_destroystokyo_paper_ParticleBuilder;
receivers(): java_util_List<org_bukkit_entity_Player> | null;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. Allows specifying a different Y size than X and Z If you want a more
 cylinder check, see receivers(int, int, boolean) If you want a more spherical check,
 see receivers(int, boolean) */
receivers(xzRadius: number, yRadius: number): com_destroystokyo_paper_ParticleBuilder;
receivers(receivers: java_util_List<org_bukkit_entity_Player> | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. If you want a more spherical check, see receivers(int,
 boolean) */
receivers(radius: number): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within the specified radius around the particle location. If byDistance is
 false, behavior uses cuboid selection the same as receivers(int, int) If byDistance is
 true, radius is tested by distance on the y plane and on the x/z plane, in a cylinder shape. */
receivers(xzRadius: number, yRadius: number, byDistance: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within the specified radius around the particle location. If byDistance is
 false, behavior uses cuboid selection the same as receivers(int, int) If byDistance is
 true, radius is tested by distance in a spherical shape */
receivers(radius: number, byDistance: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. If you want a more cylinder check, see receivers(int, int,
 boolean) If you want a more spherical check, see receivers(int, boolean) */
receivers(xRadius: number, yRadius: number, zRadius: number): com_destroystokyo_paper_ParticleBuilder;
receivers(...receivers: org_bukkit_entity_Player[] | null): com_destroystokyo_paper_ParticleBuilder | null;
receivers(receivers: java_util_Collection<org_bukkit_entity_Player> | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Changes what particle will be sent */
particle(particle: org_bukkit_Particle): com_destroystokyo_paper_ParticleBuilder;
particle(): org_bukkit_Particle;
/** Particle offset X. Varies by particle on how this is used */
offsetX(): number;
/** Particle offset Y. Varies by particle on how this is used */
offsetY(): number;
/** Particle offset Z. Varies by particle on how this is used */
offsetZ(): number;
/** Sets the particle Color and size. Only valid for REDSTONE. */
color(color: org_bukkit_Color | null, size: number): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets the particle Color.
 Only valid for REDSTONE. */
color(r: number, g: number, b: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle Color. Only valid for REDSTONE. */
color(color: org_bukkit_Color | null): com_destroystokyo_paper_ParticleBuilder | null;
constructor(particle: org_bukkit_Particle);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {


  export class VersionFetcher {
cacheTime: number;
versionMessage: string;
/** Amount of time to cache results for in milliseconds
 
 Negative values will never cache. */
getCacheTime(): number;
/** Gets the version message to cache and show to command senders. Multiple messages can be sent using newlines (\n)
 in the string. The string will be split on these newlines and sent as individual messages.
 
 NOTE: This is run in a new thread separate from that of the command processing thread */
getVersionMessage(serverVersion: string): string;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Map as java_util_Map } from 'java.util';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
/** A reputation score for a player on a villager. */

  export class Reputation extends java_lang_Object {
static REPUTATION_TYPES: com_destroystokyo_paper_entity_villager_ReputationType[];
reputation: number[];
reputation: number;
/** Sets the reputation value for a specific ReputationType. */
setReputation(type: com_destroystokyo_paper_entity_villager_ReputationType, value: number): void;
/** Gets the reputation value for a specific ReputationType. */
getReputation(type: com_destroystokyo_paper_entity_villager_ReputationType): number;
constructor(reputation: java_util_Map<com_destroystokyo_paper_entity_villager_ReputationType, java_lang_Integer>);
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** A type of reputation gained with a Villager.
 
 All types but MAJOR_POSITIVE are shared to other villagers. */

  export class ReputationType extends java_lang_Enum<com_destroystokyo_paper_entity_villager_ReputationType> {
static MAJOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MAJOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static TRADING: com_destroystokyo_paper_entity_villager_ReputationType;
static $VALUES: com_destroystokyo_paper_entity_villager_ReputationType[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ReputationType c : ReputationType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_entity_villager_ReputationType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_entity_villager_ReputationType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block.TargetBlockInfo' {
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FluidMode extends java_lang_Enum<com_destroystokyo_paper_block_TargetBlockInfo_FluidMode> {
static NEVER: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static SOURCE_ONLY: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static ALWAYS: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static $VALUES: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (TargetBlockInfo.FluidMode c : TargetBlockInfo.FluidMode.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace } from 'org.bukkit.block';
import { Object as java_lang_Object } from 'java.lang';
/** Represents information about a targeted block */

  export class TargetBlockInfo extends java_lang_Object {
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
relativeBlock: org_bukkit_block_Block;
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
/** Get the relative Block to the targeted block on the side it is targeted at */
getRelativeBlock(): org_bukkit_block_Block;
/** Get the block that is targeted */
getBlock(): org_bukkit_block_Block;
/** Get the targeted BlockFace */
getBlockFace(): org_bukkit_block_BlockFace;
constructor(block: org_bukkit_block_Block, blockFace: org_bukkit_block_BlockFace);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object } from 'java.lang';
/** Represents information about a targeted entity */

  export class TargetEntityInfo extends java_lang_Object {
entity: org_bukkit_entity_Entity;
hitVec: org_bukkit_util_Vector;
hitVector: org_bukkit_util_Vector;
entity: org_bukkit_entity_Entity;
/** Get the position the entity is targeted at */
getHitVector(): org_bukkit_util_Vector;
/** Get the entity that is targeted */
getEntity(): org_bukkit_entity_Entity;
constructor(entity: org_bukkit_entity_Entity, hitVec: org_bukkit_util_Vector);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { PathResult as com_destroystokyo_paper_entity_Pathfinder_PathResult } from 'com.destroystokyo.paper.entity.Pathfinder';
import { LivingEntity as org_bukkit_entity_LivingEntity, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Handles pathfinding operations for an Entity */

  export class Pathfinder {
entity: org_bukkit_entity_Mob;
currentPath: com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** If the entity is currently trying to navigate to a destination, this will return true */
hasPath(): boolean;
/** Calculates a destination for the Entity to navigate to, but does not set it
 as the current target. Useful for calculating what would happen before setting it. */
findPath(loc: org_bukkit_Location): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 but does not set it as the current target.
 Useful for calculating what would happen before setting it.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
findPath(target: org_bukkit_entity_LivingEntity): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Calculates a destination for the Entity to navigate to, with desired speed
 as the current target. */
moveTo(loc: org_bukkit_Location, speed: number): boolean;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 and sets it with default speed.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
moveTo(target: org_bukkit_entity_LivingEntity): boolean;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 and sets it with specified speed.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
moveTo(target: org_bukkit_entity_LivingEntity, speed: number): boolean;
/** Takes the result of a previous pathfinding calculation and sets it
 as the active pathfinding with default speed. */
moveTo(path: com_destroystokyo_paper_entity_Pathfinder_PathResult): boolean;
/** Takes the result of a previous pathfinding calculation and sets it
 as the active pathfinding, */
moveTo(path: com_destroystokyo_paper_entity_Pathfinder_PathResult, speed: number): boolean;
/** Calculates a destination for the Entity to navigate to, and sets it with default speed
 as the current target. */
moveTo(loc: org_bukkit_Location): boolean;
getEntity(): org_bukkit_entity_Mob;
getCurrentPath(): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Instructs the Entity to stop trying to navigate to its current desired location */
stopPathfinding(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.Pathfinder' {
import { List as java_util_List } from 'java.util';
import { Location as org_bukkit_Location } from 'org.bukkit';
/** Represents the result of a pathfinding calculation */

  export class PathResult {
points: java_util_List<org_bukkit_Location>;
nextPointIndex: number;
nextPoint: org_bukkit_Location | null;
finalPoint: org_bukkit_Location | null;
/** All currently calculated points to follow along the path to reach the destination location

 Will return points the entity has already moved past, see getNextPointIndex() */
getPoints(): java_util_List<org_bukkit_Location>;
getNextPointIndex(): number;
getNextPoint(): org_bukkit_Location | null;
getFinalPoint(): org_bukkit_Location | null;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Set as java_util_Set, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';
/** Represents a players profile for the game, such as UUID, Name, and textures. */

  export class PlayerProfile {
name: string | null;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
id: java_util_UUID | null;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 This will also complete textures. If you do not want to load textures, use {complete(boolean)} */
complete(): boolean;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 Optionally will also fill textures. */
complete(textures: boolean): boolean;
getName(): string | null;
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
/** Sets multiple properties. If any of the set properties already exist, it will be replaced */
setProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
/** Sets a property. If the property already exists, the previous one will be replaced */
setProperty(property: com_destroystokyo_paper_profile_ProfileProperty): void;
/** Sets this profiles Name */
setName(name: string | null): string | null;
getId(): java_util_UUID | null;
isComplete(): boolean;
/** Sets this profiles UUID */
setId(uuid: java_util_UUID | null): java_util_UUID | null;
/** Check if the Profile has the specified property */
hasProperty(property: string | null): boolean | null;
/** Removes a specific property from this profile */
removeProperty(property: string | null): boolean | null;
/** Removes a specific property from this profile */
removeProperty(property: com_destroystokyo_paper_profile_ProfileProperty): boolean;
/** Removes all properties in the collection */
removeProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): boolean;
/** Clears all properties on this profile */
clearProperties(): void;
/** Like complete(boolean) but will try only from cache, and not make network calls
 Does not account for textures. */
completeFromCache(): boolean;
/** Whether or not this Profile has textures associated to it */
hasTextures(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Object as java_lang_Object } from 'java.lang';
/** Represents a property on a PlayerProfile */

  export class ProfileProperty extends java_lang_Object {
name: string;
value: string;
signature: string;
name: string;
value: string;
signature: string | null;
isSigned(): boolean;
equals(o: java_lang_Object): boolean;
hashCode(): number;
getName(): string;
getValue(): string;
getSignature(): string | null;
constructor(name: string, value: string, signature: string | null);
constructor(name: string, value: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { GoalType as com_destroystokyo_paper_entity_ai_GoalType, GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, Goal as com_destroystokyo_paper_entity_ai_Goal } from 'com.destroystokyo.paper.entity.ai';
import { Collection as java_util_Collection } from 'java.util';
/** Represents a part of the "brain" of a mob. It tracks all tasks (running or not), allows adding and removing goals */

  export class MobGoals {
goal: com_destroystokyo_paper_entity_ai_Goal<T> | null;
goals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
removeAllGoals<T extends org_bukkit_entity_Mob>(mob: T): void;
removeAllGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): void;
hasGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): boolean;
getGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): com_destroystokyo_paper_entity_ai_Goal<T> | null;
getGoals<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(mob: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoalsWithout<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(mob: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoalsWithout<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
addGoal<T extends org_bukkit_entity_Mob>(mob: T, priority: number, goal: com_destroystokyo_paper_entity_ai_Goal<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(mob: T, goal: com_destroystokyo_paper_entity_ai_Goal<T>): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Represents the subtype of a goal. Used by minecraft to disable certain types of goals if needed. */

  export class GoalType extends java_lang_Enum<com_destroystokyo_paper_entity_ai_GoalType> {
static MOVE: com_destroystokyo_paper_entity_ai_GoalType;
static LOOK: com_destroystokyo_paper_entity_ai_GoalType;
static JUMP: com_destroystokyo_paper_entity_ai_GoalType;
static TARGET: com_destroystokyo_paper_entity_ai_GoalType;
static $VALUES: com_destroystokyo_paper_entity_ai_GoalType[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (GoalType c : GoalType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_entity_ai_GoalType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_entity_ai_GoalType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { NamespacedKey as org_bukkit_NamespacedKey } from 'org.bukkit';
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Used to identify a Goal. Consists of a NamespacedKey and the type of mob the goal can be applied to */

  export class GoalKey<T extends org_bukkit_entity_Mob> extends java_lang_Object {
entityClass: java_lang_Class<T>;
namespacedKey: org_bukkit_NamespacedKey;
namespacedKey: org_bukkit_NamespacedKey;
entityClass: java_lang_Class<T>;
equals(o: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static of<A extends org_bukkit_entity_Mob>(entityClass: java_lang_Class<A>, namespacedKey: org_bukkit_NamespacedKey): com_destroystokyo_paper_entity_ai_GoalKey<A>;
getNamespacedKey(): org_bukkit_NamespacedKey;
getEntityClass(): java_lang_Class<T>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Represents an AI goal of an entity */

  export class Goal<T extends org_bukkit_entity_Mob> {
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** Called each tick the goal is activated */
tick(): void;
/** A unique key that identifies this type of goal. Plugins should use their own namespace, not the minecraft
 namespace. Additionally, this key also specifies to what mobs this goal can be applied to */
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
/** Called when this goal gets activated */
start(): void;
/** Called when this goal gets stopped */
stop(): void;
/** Returns a list of all applicable flags for this goal.

 This method is only called on construction. */
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** Checks if this goal should stay active, defaults to shouldActivate() */
shouldStayActive(): boolean;
/** Checks if this goal should be activated */
shouldActivate(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a title to may be sent to a Player.

 A title can be sent without subtitle text. */

  export class Title extends java_lang_Object {
static DEFAULT_FADE_IN: number;
static DEFAULT_STAY: number;
static DEFAULT_FADE_OUT: number;
title: net_md_5_bungee_api_chat_BaseComponent[];
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
fadeIn: number;
stay: number;
fadeOut: number;
fadeIn: number;
stay: number;
fadeOut: number;
subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null;
title: net_md_5_bungee_api_chat_BaseComponent[];
static builder(): com_destroystokyo_paper_Title_Builder;
/** Gets the number of ticks to fade in.

 The returned value is never negative. */
getFadeIn(): number;
/** Gets the number of ticks to stay.

 The returned value is never negative. */
getStay(): number;
/** Gets the number of ticks to fade out.

 The returned value is never negative. */
getFadeOut(): number;
/** Gets the text of this title's subtitle */
getSubtitle(): net_md_5_bungee_api_chat_BaseComponent[] | null;
/** Gets the text of this title */
getTitle(): net_md_5_bungee_api_chat_BaseComponent[];
/** Create a title with the default time values.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[], subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: string, subtitle: string | null);
/** Creates a new title. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent, subtitle: net_md_5_bungee_api_chat_BaseComponent | null, fadeIn: number, stay: number, fadeOut: number);
/** Creates a new title. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[], subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null, fadeIn: number, stay: number, fadeOut: number);
/** Creates a new title.

 It is recommended to the BaseComponent constrctors. */
constructor(title: string, subtitle: string | null, fadeIn: number, stay: number, fadeOut: number);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[]);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: string);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent, subtitle: net_md_5_bungee_api_chat_BaseComponent | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.Title' {
import { Title as com_destroystokyo_paper_Title } from 'com.destroystokyo.paper';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { Object as java_lang_Object } from 'java.lang';
/** A builder for creating titles */

  export class Builder extends java_lang_Object {
title: net_md_5_bungee_api_chat_BaseComponent[];
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
fadeIn: number;
stay: number;
fadeOut: number;
/** Create a title based on the values in the builder. */
build(): com_destroystokyo_paper_Title;
/** Sets the title to the given text. */
title(title: net_md_5_bungee_api_chat_BaseComponent): com_destroystokyo_paper_Title_Builder;
/** Sets the title to the given text.

 It is recommended to the BaseComponent methods. */
title(title: string): com_destroystokyo_paper_Title_Builder;
/** Sets the title to the given text. */
title(title: net_md_5_bungee_api_chat_BaseComponent[]): com_destroystokyo_paper_Title_Builder;
/** Sets the subtitle to the given text.

 It is recommended to the BaseComponent methods. */
subtitle(subtitle: string | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the subtitle to the given text. */
subtitle(subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the subtitle to the given text. */
subtitle(subtitle: net_md_5_bungee_api_chat_BaseComponent | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the number of ticks for the title to fade in */
fadeIn(fadeIn: number): com_destroystokyo_paper_Title_Builder;
/** Sets the number of ticks for the title to stay. */
stay(stay: number): com_destroystokyo_paper_Title_Builder;
/** Sets the number of ticks for the title to fade out. */
fadeOut(fadeOut: number): com_destroystokyo_paper_Title_Builder;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Class as java_lang_Class, Boolean as java_lang_Boolean, Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { ClientOption as com_destroystokyo_paper_ClientOption, SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';

  export class ClientOption<T extends java_lang_Object> extends java_lang_Object {
static SKIN_PARTS: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_SkinParts>;
static CHAT_COLORS_ENABLED: com_destroystokyo_paper_ClientOption<java_lang_Boolean>;
static CHAT_VISIBILITY: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_ClientOption_ChatVisibility>;
static LOCALE: com_destroystokyo_paper_ClientOption<string>;
static MAIN_HAND: com_destroystokyo_paper_ClientOption<org_bukkit_inventory_MainHand>;
static VIEW_DISTANCE: com_destroystokyo_paper_ClientOption<java_lang_Integer>;
type: java_lang_Class<T>;
type: java_lang_Class<T>;
getType(): java_lang_Class<T>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {


  export class SkinParts {
raw: number;
hasJacketEnabled(): boolean;
hasLeftSleeveEnabled(): boolean;
hasRightSleeveEnabled(): boolean;
hasLeftPantsEnabled(): boolean;
hasRightPantsEnabled(): boolean;
hasHatsEnabled(): boolean;
hasCapeEnabled(): boolean;
getRaw(): number;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.ClientOption' {
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChatVisibility extends java_lang_Enum<com_destroystokyo_paper_ClientOption_ChatVisibility> {
static FULL: com_destroystokyo_paper_ClientOption_ChatVisibility;
static SYSTEM: com_destroystokyo_paper_ClientOption_ChatVisibility;
static HIDDEN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static UNKNOWN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static $VALUES: com_destroystokyo_paper_ClientOption_ChatVisibility[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ClientOption.ChatVisibility c : ClientOption.ChatVisibility.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_ClientOption_ChatVisibility[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_ClientOption_ChatVisibility;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
/** Represents a client connected to the server. */

  export class NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress | null;
/** Returns the socket address of the client. */
getAddress(): java_net_InetSocketAddress;
/** Returns the protocol version of the client. */
getProtocolVersion(): number;
/** Returns the virtual host the client is connected to.

 The virtual host refers to the hostname/port the client used to
 connect to the server. */
getVirtualHost(): java_net_InetSocketAddress | null;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { HeightmapType as com_destroystokyo_paper_HeightmapType } from 'com.destroystokyo.paper';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Enumeration of different heightmap types maintained by the server. Generally using these maps is much faster
 than using an iterative search for a block in a given x, z coordinate. */

  export class HeightmapType extends java_lang_Enum<com_destroystokyo_paper_HeightmapType> {
static LIGHT_BLOCKING: com_destroystokyo_paper_HeightmapType;
static ANY: com_destroystokyo_paper_HeightmapType;
static SOLID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID_NO_LEAVES: com_destroystokyo_paper_HeightmapType;
static $VALUES: com_destroystokyo_paper_HeightmapType[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (HeightmapType c : HeightmapType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_HeightmapType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_HeightmapType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Sound as org_bukkit_Sound } from 'org.bukkit';
/** Represents the sounds that a Block makes in certain situations
 
 The sound group includes break, step, place, hit, and fall sounds. */

  export class BlockSoundGroup {
stepSound: org_bukkit_Sound;
breakSound: org_bukkit_Sound;
hitSound: org_bukkit_Sound;
placeSound: org_bukkit_Sound;
fallSound: org_bukkit_Sound;
/** Gets the sound that plays when stepping on this block */
getStepSound(): org_bukkit_Sound;
/** Gets the sound that plays when breaking this block */
getBreakSound(): org_bukkit_Sound;
/** Gets the sound that plays when hitting this block */
getHitSound(): org_bukkit_Sound;
/** Gets the sound that plays when placing this block */
getPlaceSound(): org_bukkit_Sound;
/** Gets the sound that plays when this block falls */
getFallSound(): org_bukkit_Sound;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { AnvilInventory as org_bukkit_inventory_AnvilInventory, Inventory as org_bukkit_inventory_Inventory, InventoryView as org_bukkit_inventory_InventoryView } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { InventoryEvent as org_bukkit_event_inventory_InventoryEvent } from 'org.bukkit.event.inventory';
/** Called when an anvil is damaged from being used */

  export class AnvilDamagedEvent extends org_bukkit_event_inventory_InventoryEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancel: boolean;
damageState: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
inventory: org_bukkit_inventory_AnvilInventory;
inventory: org_bukkit_inventory_Inventory;
damageState: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Sets if anvil is breaking on this use */
setBreaking(breaking: boolean): void;
/** Gets if anvil is breaking on this use */
isBreaking(): boolean;
/** Sets the new state of damage on the anvil */
setDamageState(damageState: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState): void;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Description copied from class: InventoryEventGets the primary Inventory involved in this transaction */
getInventory(): org_bukkit_inventory_AnvilInventory;
/** Description copied from class: InventoryEventGets the primary Inventory involved in this transaction */
getInventory(): org_bukkit_inventory_Inventory;
/** Gets the new state of damage on the anvil */
getDamageState(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(inventory: org_bukkit_inventory_InventoryView, blockData: org_bukkit_block_data_BlockData);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.AnvilDamagedEvent' {
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Represents the amount of damage on an anvil block */

  export class DamageState extends java_lang_Enum<com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState> {
static FULL: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static CHIPPED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static DAMAGED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static BROKEN: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
material: org_bukkit_Material;
static $VALUES: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
material: org_bukkit_Material;
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (AnvilDamagedEvent.DamageState c : AnvilDamagedEvent.DamageState.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
/** Get damaged state by block material */
static getState(material: org_bukkit_Material | null): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Get damaged state by block data */
static getState(blockData: org_bukkit_block_data_BlockData | null): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Get block material of this state */
getMaterial(): org_bukkit_Material;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.AnvilDamagedEvent' {
import { DamageState as com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState } from 'com.destroystokyo.paper.event.block.AnvilDamagedEvent';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Represents the amount of damage on an anvil block */

  export class DamageState extends java_lang_Enum<com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState> {
static FULL: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static CHIPPED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static DAMAGED: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
static BROKEN: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
material: org_bukkit_Material;
static $VALUES: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
static state: com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
material: org_bukkit_Material;
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (AnvilDamagedEvent.DamageState c : AnvilDamagedEvent.DamageState.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState;
/** Get damaged state by block material */
static getState(material: org_bukkit_Material | null): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Get damaged state by block data */
static getState(blockData: org_bukkit_block_data_BlockData | null): com_destroystokyo_paper_event_block_AnvilDamagedEvent_DamageState | null;
/** Get block material of this state */
getMaterial(): org_bukkit_Material;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.inventory.meta' {
import { ItemMeta as org_bukkit_inventory_meta_ItemMeta } from 'org.bukkit.inventory.meta';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { Enchantment as org_bukkit_enchantments_Enchantment } from 'org.bukkit.enchantments';
import { Attribute as org_bukkit_attribute_Attribute, AttributeModifier as org_bukkit_attribute_AttributeModifier } from 'org.bukkit.attribute';
import { Collection as java_util_Collection, Set as java_util_Set, Map as java_util_Map, List as java_util_List } from 'java.util';
import { EquipmentSlot as org_bukkit_inventory_EquipmentSlot, ItemFlag as org_bukkit_inventory_ItemFlag } from 'org.bukkit.inventory';
import { Multimap as com_google_common_collect_Multimap } from 'com.google.common.collect';
import { CustomItemTagContainer as org_bukkit_inventory_meta_tags_CustomItemTagContainer } from 'org.bukkit.inventory.meta.tags';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Namespaced as com_destroystokyo_paper_Namespaced } from 'com.destroystokyo.paper';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';

  export class ArmorStandMeta implements org_bukkit_inventory_meta_ItemMeta {
displayName: string;
localizedName: string;
customModelData: number;
attributeModifiers: java_util_Collection<org_bukkit_attribute_AttributeModifier> | null;
attributeModifiers: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>;
attributeModifiers: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier> | null;
customTagContainer: org_bukkit_inventory_meta_tags_CustomItemTagContainer;
canDestroy: java_util_Set<org_bukkit_Material>;
canPlaceOn: java_util_Set<org_bukkit_Material>;
destroyableKeys: java_util_Set<com_destroystokyo_paper_Namespaced>;
placeableKeys: java_util_Set<com_destroystokyo_paper_Namespaced>;
enchantLevel: number;
enchants: java_util_Map<org_bukkit_enchantments_Enchantment, java_lang_Integer>;
lore: java_util_List<string> | null;
itemFlags: java_util_Set<org_bukkit_inventory_ItemFlag>;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
/** Gets whether this ArmorStand should show arms when spawned */
shouldShowArms(): boolean;
/** Gets whether this ArmorStand should have no base plate when spawned */
hasNoBasePlate(): boolean;
/** Sets that this ArmorStand should have no base plate when spawned */
setNoBasePlate(noBasePlate: boolean): void;
/** Sets that this ArmorStand should show arms when spawned */
setShowArms(showArms: boolean): void;
/** Sets that this ArmorStand should be a marker when spawned
 The exact details of this flag are an implementation detail */
setMarker(marker: boolean): void;
/** Gets whether the ArmorStand should be invisible when spawned */
isInvisible(): boolean;
/** Sets that this ArmorStand should be invisible when spawned */
setInvisible(invisible: boolean): void;
/** Gets whether this ArmorStand will be a marker when spawned
 The exact details of this flag are an implementation detail */
isMarker(): boolean;
/** Gets whether this ArmorStand will be small when spawned */
isSmall(): boolean;
/** Sets that this ArmorStand should be small when spawned */
setSmall(small: boolean): void;
/** Gets the display name that is set.
 
 Plugins should check that hasDisplayName() returns true
 before calling this method. */
getDisplayName(): string;
/** Gets the localized display name that is set.
 
 Plugins should check that hasLocalizedName() returns true
 before calling this method. */
getLocalizedName(): string;
clone(): org_bukkit_inventory_meta_ItemMeta;
/** Checks for existence of a display name. */
hasDisplayName(): boolean;
/** Checks for existence of a localized name. */
hasLocalizedName(): boolean;
/** Sets the localized name. */
setLocalizedName(name: string | null): void | null;
/** Checks for existence of custom model data.
 
 CustomModelData is an integer that may be associated client side with a
 custom item model. */
hasCustomModelData(): boolean;
/** Gets the custom model data that is set.
 
 CustomModelData is an integer that may be associated client side with a
 custom item model.
 
 Plugins should check that hasCustomModelData() returns true
 before calling this method. */
getCustomModelData(): number;
/** Sets the custom model data.
 
 CustomModelData is an integer that may be associated client side with a
 custom item model. */
setCustomModelData(data: java_lang_Integer | null): void | null;
/** Checks for the existence of any enchantments. */
hasEnchants(): boolean;
/** Checks if the specified enchantment conflicts with any enchantments in
 this ItemMeta. */
hasConflictingEnchant(ench: org_bukkit_enchantments_Enchantment): boolean;
/** Return if the unbreakable tag is true. An unbreakable item will not lose
 durability. */
isUnbreakable(): boolean;
/** Sets the unbreakable tag. An unbreakable item will not lose durability. */
setUnbreakable(unbreakable: boolean): void;
/** Checks for the existence of any AttributeModifiers. */
hasAttributeModifiers(): boolean;
/** Return an immutable copy of all AttributeModifiers
 for a given Attribute */
getAttributeModifiers(attribute: org_bukkit_attribute_Attribute): java_util_Collection<org_bukkit_attribute_AttributeModifier> | null;
/** Return an immutable copy of all Attributes and their
 AttributeModifiers for a given EquipmentSlot.
 Any AttributeModifier that does have have a given
 EquipmentSlot will be returned. This is because
 AttributeModifiers without a slot are active in any slot.
 If there are no attributes set for the given slot, an empty map
 will be returned. */
getAttributeModifiers(slot: org_bukkit_inventory_EquipmentSlot): com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier>;
/** Return an immutable copy of all Attributes and
 their modifiers in this ItemMeta.
 Returns null if none exist. */
getAttributeModifiers(): com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier> | null;
/** Add an Attribute and it's Modifier.
 AttributeModifiers can now support EquipmentSlots.
 If not set, the AttributeModifier will be active in ALL slots.
 
 Two AttributeModifiers that have the same UUID
 cannot exist on the same Attribute. */
addAttributeModifier(attribute: org_bukkit_attribute_Attribute, modifier: org_bukkit_attribute_AttributeModifier): boolean;
/** Set all Attributes and their AttributeModifiers.
 To clear all currently set Attributes and AttributeModifiers use
 null or an empty Multimap.
 If not null nor empty, this will filter all entries that are not-null
 and add them to the ItemStack. */
setAttributeModifiers(attributeModifiers: com_google_common_collect_Multimap<org_bukkit_attribute_Attribute, org_bukkit_attribute_AttributeModifier> | null): void | null;
/** Remove all AttributeModifiers associated with the given
 Attribute.
 This will return false if nothing was removed. */
removeAttributeModifier(attribute: org_bukkit_attribute_Attribute): boolean;
/** Remove a specific Attribute and AttributeModifier.
 AttributeModifiers are matched according to their UUID. */
removeAttributeModifier(attribute: org_bukkit_attribute_Attribute, modifier: org_bukkit_attribute_AttributeModifier): boolean;
/** Remove all Attributes and AttributeModifiers for a
 given EquipmentSlot.
 If the given EquipmentSlot is null, this will remove all
 AttributeModifiers that do not have an EquipmentSlot set. */
removeAttributeModifier(slot: org_bukkit_inventory_EquipmentSlot): boolean;
/** Returns a public custom tag container capable of storing tags on the
 item.

 Those tags will be sent to the client with all of their content, so the
 client is capable of reading them. This will result in the player seeing
 a NBT Tag notification on the item.

 These tags can also be modified by the client once in creative mode */
getCustomTagContainer(): org_bukkit_inventory_meta_tags_CustomItemTagContainer;
/** Gets set of materials what given item can destroy in GameMode.ADVENTURE */
getCanDestroy(): java_util_Set<org_bukkit_Material>;
/** Sets set of materials what given item can destroy in GameMode.ADVENTURE */
setCanDestroy(canDestroy: java_util_Set<org_bukkit_Material>): void;
/** Gets set of materials where given item can be placed on in GameMode.ADVENTURE */
getCanPlaceOn(): java_util_Set<org_bukkit_Material>;
/** Sets set of materials where given item can be placed on in GameMode.ADVENTURE */
setCanPlaceOn(canPlaceOn: java_util_Set<org_bukkit_Material>): void;
/** Gets the collection of namespaced keys that the item can destroy in GameMode.ADVENTURE */
getDestroyableKeys(): java_util_Set<com_destroystokyo_paper_Namespaced>;
/** Sets the collection of namespaced keys that the item can destroy in GameMode.ADVENTURE */
setDestroyableKeys(canDestroy: java_util_Collection<com_destroystokyo_paper_Namespaced>): void;
/** Gets the collection of namespaced keys that the item can be placed on in GameMode.ADVENTURE */
getPlaceableKeys(): java_util_Set<com_destroystokyo_paper_Namespaced>;
/** Sets the set of namespaced keys that the item can be placed on in GameMode.ADVENTURE */
setPlaceableKeys(canPlaceOn: java_util_Collection<com_destroystokyo_paper_Namespaced>): void;
/** Checks for the existence of any keys that the item can be placed on */
hasPlaceableKeys(): boolean;
/** Checks for the existence of any keys that the item can destroy */
hasDestroyableKeys(): boolean;
/** Sets the display name. */
setDisplayName(name: string | null): void | null;
/** Checks for existence of the specified enchantment. */
hasEnchant(ench: org_bukkit_enchantments_Enchantment): boolean;
/** Checks for the level of the specified enchantment. */
getEnchantLevel(ench: org_bukkit_enchantments_Enchantment): number;
/** Returns a copy the enchantments in this ItemMeta. 
 Returns an empty map if none. */
getEnchants(): java_util_Map<org_bukkit_enchantments_Enchantment, java_lang_Integer>;
/** Adds the specified enchantment to this item meta. */
addEnchant(ench: org_bukkit_enchantments_Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
/** Removes the specified enchantment from this item meta. */
removeEnchant(ench: org_bukkit_enchantments_Enchantment): boolean;
/** Gets the lore that is set.
 
 Plugins should check if hasLore() returns true before
 calling this method. */
getLore(): java_util_List<string> | null;
/** Checks for existence of lore. */
hasLore(): boolean;
/** Sets the lore for this item.
 Removes lore when given null. */
setLore(lore: java_util_List<string> | null): void | null;
/** Set itemflags which should be ignored when rendering a ItemStack in the Client. This Method does silently ignore double set itemFlags. */
addItemFlags(...itemFlags: org_bukkit_inventory_ItemFlag[]): void;
/** Remove specific set of itemFlags. This tells the Client it should render it again. This Method does silently ignore double removed itemFlags. */
removeItemFlags(...itemFlags: org_bukkit_inventory_ItemFlag[]): void;
/** Get current set itemFlags. The collection returned is unmodifiable. */
getItemFlags(): java_util_Set<org_bukkit_inventory_ItemFlag>;
/** Check if the specified flag is present on this item. */
hasItemFlag(flag: org_bukkit_inventory_ItemFlag): boolean;
/** Internal use only! Do not use under any circumstances! */
setVersion(version: number): void;
/** Creates a Map representation of this class.
 
 This class must provide a method to restore this class, as defined in
 the ConfigurationSerializable interface javadocs. */
serialize(): java_util_Map<string, java_lang_Object>;
/** Returns a custom tag container capable of storing tags on the object.

 Note that the tags stored on this container are all stored under their
 own custom namespace therefore modifying default tags using this
 PersistentDataHolder is impossible. */
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { AtomicInteger as java_util_concurrent_atomic_AtomicInteger } from 'java.util.concurrent.atomic';
import { Object as java_lang_Object } from 'java.lang';

  export class ASMEventExecutorGenerator extends java_lang_Object {
static NEXT_ID: java_util_concurrent_atomic_AtomicInteger;
static generateEventExecutor(m: java_lang_reflect_Method, name: string): number[];
static generateName(): string;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { List as java_util_List } from 'java.util';
import { CommandSender as org_bukkit_command_CommandSender } from 'org.bukkit.command';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Allows plugins to compute tab completion results asynchronously. If this event provides completions, then the standard synchronous process will not be fired to populate the results. However, the synchronous TabCompleteEvent will fire with the Async results.

 Only 1 process will be allowed to provide completions, the Async Event, or the standard process. */

  export class AsyncTabCompleteEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
sender: org_bukkit_command_CommandSender;
buffer: string;
isCommand: boolean;
loc: org_bukkit_Location;
completions: java_util_List<string>;
cancelled: boolean;
handled: boolean;
fireSyncHandler: boolean;
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
buffer: string;
location: org_bukkit_Location | null;
completions: java_util_List<string>;
static handlerList: org_bukkit_event_HandlerList;
sender: org_bukkit_command_CommandSender;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Return the entire buffer which formed the basis of this completion. */
getBuffer(): string;
getLocation(): org_bukkit_Location | null;
isCommand(): boolean;
/** Set the completions offered, overriding any already set.
 If this collection is not empty after the event is fired, then
 the standard process of calling Command.tabComplete(CommandSender, String, String[])
 or current player names will not be called.

 The passed collection will be cloned to a new List. You must call {getCompletions()} to mutate from here */
setCompletions(completions: java_util_List<string>): void;
/** Sets whether or not to consider the completion request handled.
 If true, the standard process of calling Command.tabComplete(CommandSender, String, String[])
 or current player names will not be called. */
setHandled(handled: boolean): void;
/** The list of completions which will be offered to the sender, in order.
 This list is mutable and reflects what will be offered.

 If this collection is not empty after the event is fired, then
 the standard process of calling Command.tabComplete(CommandSender, String, String[])
 or current player names will not be called. */
getCompletions(): java_util_List<string>;
/** If true, the standard process of calling Command.tabComplete(CommandSender, String, String[])
 or current player names will not be called. */
isHandled(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Will provide no completions, and will not fire the synchronous process */
setCancelled(cancelled: boolean): void;
/** Get the sender completing this command. */
getSender(): org_bukkit_command_CommandSender;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(sender: org_bukkit_command_CommandSender, completions: java_util_List<string>, buffer: string, isCommand: boolean, loc: org_bukkit_Location | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PotionEffect as org_bukkit_potion_PotionEffect } from 'org.bukkit.potion';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';
/** Called when a beacon effect is being applied to a player. */

  export class BeaconEffectEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
effect: org_bukkit_potion_PotionEffect;
player: org_bukkit_entity_Player;
primary: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
player: org_bukkit_entity_Player;
effect: org_bukkit_potion_PotionEffect;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Gets the player who the potion effect is being applied to. */
getPlayer(): org_bukkit_entity_Player;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancelled: boolean): void;
/** Gets the potion effect being applied. */
getEffect(): org_bukkit_potion_PotionEffect;
/** Gets whether the effect is a primary beacon effect. */
isPrimary(): boolean;
/** Sets the potion effect that will be applied. */
setEffect(effect: org_bukkit_potion_PotionEffect): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(block: org_bukkit_block_Block, effect: org_bukkit_potion_PotionEffect, player: org_bukkit_entity_Player, primary: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';
/** Fired anytime the server intends to 'destroy' a block through some triggering reason.
 This does not fire anytime a block is set to air, but only with more direct triggers such
 as physics updates, pistons, Entities changing blocks, commands set to "Destroy".

 This event is associated with the game playing a sound effect at the block in question, when
 something can be described as "intend to destroy what is there",

 Events such as leaves decaying, pistons retracting (where the block is moving), does NOT fire this event. */

  export class BlockDestroyEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
newState: org_bukkit_block_data_BlockData;
willDrop: boolean;
playEffect: boolean;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
newState: org_bukkit_block_data_BlockData;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
willDrop(): boolean;
setPlayEffect(playEffect: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
playEffect(): boolean;
/** If the event is cancelled, the block will remain in its previous state. */
setCancelled(cancel: boolean): void;
getNewState(): org_bukkit_block_data_BlockData;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(block: org_bukkit_block_Block, newState: org_bukkit_block_data_BlockData, willDrop: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Sound as org_bukkit_Sound } from 'org.bukkit';
/** Represents the sounds that a Block makes in certain situations
 
 The sound group includes break, step, place, hit, and fall sounds. */

  export class BlockSoundGroup {
stepSound: org_bukkit_Sound;
breakSound: org_bukkit_Sound;
hitSound: org_bukkit_Sound;
placeSound: org_bukkit_Sound;
fallSound: org_bukkit_Sound;
/** Gets the sound that plays when stepping on this block */
getStepSound(): org_bukkit_Sound;
/** Gets the sound that plays when breaking this block */
getBreakSound(): org_bukkit_Sound;
/** Gets the sound that plays when hitting this block */
getHitSound(): org_bukkit_Sound;
/** Gets the sound that plays when placing this block */
getPlaceSound(): org_bukkit_Sound;
/** Gets the sound that plays when this block falls */
getFallSound(): org_bukkit_Sound;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { IntFunction as java_util_function_IntFunction } from 'java.util.function';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { LongAdder as java_util_concurrent_atomic_LongAdder } from 'java.util.concurrent.atomic';
import { ConcurrentLinkedQueue as java_util_concurrent_ConcurrentLinkedQueue } from 'java.util.concurrent';

  export class CachedSizeConcurrentLinkedQueue<E extends java_lang_Object> extends java_util_concurrent_ConcurrentLinkedQueue<E> {
cachedSize: java_util_concurrent_atomic_LongAdder;
class: java_lang_Class<java_lang_Object>;
add(e: E): boolean;
size(): number;
poll(): E | null;
remove(): E;
element(): E;
containsAll(arg0: java_util_Collection<java_lang_Object>): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
toArray<T extends java_lang_Object>(arg0: java_util_function_IntFunction<T[]>): T[];
stream(): java_util_stream_Stream<E>;
parallelStream(): java_util_stream_Stream<E>;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
/** Represents an Inventory that can generate loot, such as Chests inside of Fortresses and Mineshafts */

  export class LootableBlockInventory implements com_destroystokyo_paper_loottable_LootableInventory {
block: org_bukkit_block_Block;
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable | null;
/** Gets the block that is lootable */
getBlock(): org_bukkit_block_Block;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable, Lootable as org_bukkit_loot_Lootable } from 'org.bukkit.loot';
/** Represents an Inventory that contains a Loot Table associated to it that will
 automatically fill on first open.

 A new feature and API is provided to support automatically refreshing the contents
 of the inventory based on that Loot Table after a configurable amount of time has passed.

 The behavior of how the Inventory is filled based on the loot table may vary based
 on Minecraft versions and the Loot Table feature. */

  export class LootableInventory implements org_bukkit_loot_Lootable {
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable | null;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { ClassDefiner as com_destroystokyo_paper_event_executor_asm_ClassDefiner } from 'com.destroystokyo.paper.event.executor.asm';
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class ClassDefiner {
static instance: com_destroystokyo_paper_event_executor_asm_ClassDefiner;
static getInstance(): com_destroystokyo_paper_event_executor_asm_ClassDefiner;
/** Define a class */
defineClass(parentLoader: java_lang_ClassLoader, name: string, data: number[]): java_lang_Class<java_lang_Object>;
/** Returns if the defined classes can bypass access checks */
isBypassAccessChecks(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Class as java_lang_Class, Boolean as java_lang_Boolean, Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
import { ClientOption as com_destroystokyo_paper_ClientOption, SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';

  export class ClientOption<T extends java_lang_Object> extends java_lang_Object {
static SKIN_PARTS: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_SkinParts>;
static CHAT_COLORS_ENABLED: com_destroystokyo_paper_ClientOption<java_lang_Boolean>;
static CHAT_VISIBILITY: com_destroystokyo_paper_ClientOption<com_destroystokyo_paper_ClientOption_ChatVisibility>;
static LOCALE: com_destroystokyo_paper_ClientOption<string>;
static MAIN_HAND: com_destroystokyo_paper_ClientOption<org_bukkit_inventory_MainHand>;
static VIEW_DISTANCE: com_destroystokyo_paper_ClientOption<java_lang_Integer>;
type: java_lang_Class<T>;
type: java_lang_Class<T>;
getType(): java_lang_Class<T>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.ClientOption' {
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChatVisibility extends java_lang_Enum<com_destroystokyo_paper_ClientOption_ChatVisibility> {
static FULL: com_destroystokyo_paper_ClientOption_ChatVisibility;
static SYSTEM: com_destroystokyo_paper_ClientOption_ChatVisibility;
static HIDDEN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static UNKNOWN: com_destroystokyo_paper_ClientOption_ChatVisibility;
static $VALUES: com_destroystokyo_paper_ClientOption_ChatVisibility[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ClientOption.ChatVisibility c : ClientOption.ChatVisibility.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_ClientOption_ChatVisibility[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_ClientOption_ChatVisibility;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Creeper as org_bukkit_entity_Creeper, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Called when a Creeper is ignite flag is changed (armed/disarmed to explode). */

  export class CreeperIgniteEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
canceled: boolean;
ignited: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Creeper;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Creeper;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
setIgnited(ignited: boolean): void;
isIgnited(): boolean;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(creeper: org_bukkit_entity_Creeper, ignited: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player, EntityType as org_bukkit_entity_EntityType, Pose as org_bukkit_entity_Pose, Projectile as org_bukkit_entity_Projectile, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Pathfinder as com_destroystokyo_paper_entity_Pathfinder, TargetEntityInfo as com_destroystokyo_paper_entity_TargetEntityInfo } from 'com.destroystokyo.paper.entity';
import { MemoryKey as org_bukkit_entity_memory_MemoryKey } from 'org.bukkit.entity.memory';
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class } from 'java.lang';
import { FluidCollisionMode as org_bukkit_FluidCollisionMode, Location as org_bukkit_Location, Material as org_bukkit_Material, World as org_bukkit_World, Server as org_bukkit_Server, EntityEffect as org_bukkit_EntityEffect, Chunk as org_bukkit_Chunk } from 'org.bukkit';
import { RayTraceResult as org_bukkit_util_RayTraceResult, BoundingBox as org_bukkit_util_BoundingBox, Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { EntityEquipment as org_bukkit_inventory_EntityEquipment, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Set as java_util_Set, List as java_util_List, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace, PistonMoveReaction as org_bukkit_block_PistonMoveReaction } from 'org.bukkit.block';
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { TargetBlockInfo as com_destroystokyo_paper_block_TargetBlockInfo } from 'com.destroystokyo.paper.block';
import { PotionEffect as org_bukkit_potion_PotionEffect, PotionEffectType as org_bukkit_potion_PotionEffectType } from 'org.bukkit.potion';
import { Attribute as org_bukkit_attribute_Attribute, AttributeInstance as org_bukkit_attribute_AttributeInstance } from 'org.bukkit.attribute';
import { Spigot as org_bukkit_entity_Entity_Spigot } from 'org.bukkit.entity.Entity';
import { Spigot as org_bukkit_command_CommandSender_Spigot } from 'org.bukkit.command.CommandSender';
import { TeleportCause as org_bukkit_event_player_PlayerTeleportEvent_TeleportCause } from 'org.bukkit.event.player.PlayerTeleportEvent';
import { CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';
import { EntityDamageEvent as org_bukkit_event_entity_EntityDamageEvent } from 'org.bukkit.event.entity';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { MetadataValue as org_bukkit_metadata_MetadataValue } from 'org.bukkit.metadata';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Permission as org_bukkit_permissions_Permission, PermissionAttachment as org_bukkit_permissions_PermissionAttachment, PermissionAttachmentInfo as org_bukkit_permissions_PermissionAttachmentInfo } from 'org.bukkit.permissions';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';

  export class RangedEntity implements org_bukkit_entity_Mob {
target: org_bukkit_entity_LivingEntity | null;
pathfinder: com_destroystokyo_paper_entity_Pathfinder;
equipment: org_bukkit_inventory_EntityEquipment | null;
itemUseRemainingTime: number;
handRaisedTime: number;
shieldBlockingDelay: number;
targetEntity: org_bukkit_entity_Entity | null;
targetEntity: org_bukkit_entity_Entity | null;
leashHolder: org_bukkit_entity_Entity;
eyeHeight: number;
eyeHeight: number;
eyeLocation: org_bukkit_Location;
lineOfSight: java_util_List<org_bukkit_block_Block> | null;
targetBlock: org_bukkit_block_Block | null;
targetBlock: org_bukkit_block_Block | null;
targetBlock: org_bukkit_block_Block | null;
targetBlockFace: org_bukkit_block_BlockFace | null;
targetBlockFace: org_bukkit_block_BlockFace | null;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo | null;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo | null;
remainingAir: number;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo | null;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo | null;
lastTwoTargetBlocks: java_util_List<org_bukkit_block_Block> | null;
targetBlockExact: org_bukkit_block_Block | null;
targetBlockExact: org_bukkit_block_Block | null;
maximumAir: number;
maximumNoDamageTicks: number;
lastDamage: number;
noDamageTicks: number;
killer: org_bukkit_entity_Player | null;
potionEffect: org_bukkit_potion_PotionEffect | null;
activePotionEffects: java_util_Collection<org_bukkit_potion_PotionEffect>;
removeWhenFarAway: boolean;
canPickupItems: boolean;
memory: T | null;
arrowsStuck: number;
activeItem: org_bukkit_inventory_ItemStack | null;
attribute: org_bukkit_attribute_AttributeInstance | null;
health: number;
maxHealth: number;
absorptionAmount: number;
location: org_bukkit_Location;
location: org_bukkit_Location;
type: org_bukkit_entity_EntityType;
origin: org_bukkit_Location | null;
vehicle: org_bukkit_entity_Entity | null;
passengers: java_util_List<org_bukkit_entity_Entity>;
world: org_bukkit_World;
width: number;
height: number;
server: org_bukkit_Server;
boundingBox: org_bukkit_util_BoundingBox;
nearbyEntities: java_util_List<org_bukkit_entity_Entity>;
pistonMoveReaction: org_bukkit_block_PistonMoveReaction;
chunk: org_bukkit_Chunk;
uniqueId: java_util_UUID;
maxFireTicks: number;
scoreboardTags: java_util_Set<string>;
pose: org_bukkit_entity_Pose;
facing: org_bukkit_block_BlockFace;
velocity: org_bukkit_util_Vector;
entityId: number;
fireTicks: number;
passenger: org_bukkit_entity_Entity | null;
fallDistance: number;
lastDamageCause: org_bukkit_event_entity_EntityDamageEvent | null;
ticksLived: number;
portalCooldown: number;
entitySpawnReason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
metadata: java_util_List<org_bukkit_metadata_MetadataValue>;
name: string;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
customName: string | null;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
seed: number;
lootTable: org_bukkit_loot_LootTable | null;
/** Alias to LivingEntity.isHandRaised(), if the entity is charging an attack */
isChargingAttack(): boolean;
/** Attack the specified entity using a ranged attack. */
rangedAttack(target: org_bukkit_entity_LivingEntity, charge: number): void;
/** Sets that the Entity is "charging" up an attack, by raising its hands */
setChargingAttack(raiseHands: boolean): void;
/** Gets the current target of this Mob */
getTarget(): org_bukkit_entity_LivingEntity | null;
/** Instructs this Mob to set the specified LivingEntity as its target.
 
 Hostile creatures may attack their target, and friendly creatures may
 follow their target. */
setTarget(target: org_bukkit_entity_LivingEntity | null): void | null;
/** Check if this mob is exposed to daylight */
isInDaylight(): boolean;
/** Enables access to control the pathing of an Entity */
getPathfinder(): com_destroystokyo_paper_entity_Pathfinder;
/** Sets whether this mob is aware of its surroundings.

 Unaware mobs will still move if pushed, attacked, etc. but will not move
 or perform any actions on their own. Unaware mobs may also have other
 unspecified behaviours disabled, such as drowning. */
setAware(aware: boolean): void;
/** Gets whether this mob is aware of its surroundings.

 Unaware mobs will still move if pushed, attacked, etc. but will not move
 or perform any actions on their own. Unaware mobs may also have other
 unspecified behaviours disabled, such as drowning. */
isAware(): boolean;
/** Sets the value of the memory specified.
 
 Note that the value will not be persisted when the specific entity does
 not have that value by default. */
setMemory<T extends java_lang_Object>(memoryKey: org_bukkit_entity_memory_MemoryKey<T>, memoryValue: T | null): void | null;
/** Returns whether this entity is slumbering. */
isSleeping(): boolean;
/** Performs a ray trace that provides information on the targeted block.
 
 This takes the blocks' precise collision shapes into account.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
rayTraceBlocks(maxDistance: number, fluidCollisionMode: org_bukkit_FluidCollisionMode): org_bukkit_util_RayTraceResult | null;
/** Performs a ray trace that provides information on the targeted block.
 
 This takes the blocks' precise collision shapes into account. Fluids are
 ignored.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
rayTraceBlocks(maxDistance: number): org_bukkit_util_RayTraceResult | null;
/** Makes this entity attack the given entity with a melee attack.

 Attack damage is calculated by the server from the attributes and
 equipment of this mob, and knockback is applied to target as
 appropriate. */
attack(target: org_bukkit_entity_Entity): void;
/** Gets the inventory with the equipment worn by the living entity. */
getEquipment(): org_bukkit_inventory_EntityEquipment | null;
/** Checks to see if an entity is gliding, such as using an Elytra. */
isGliding(): boolean;
/** Checks to see if an entity is swimming. */
isSwimming(): boolean;
/** Makes entity start or stop swimming.

 This may have unexpected results if the entity is not in water. */
setSwimming(swimming: boolean): void;
/** Gets if this entity is subject to collisions with other entities.
 
 Please note that this method returns only the custom collidable state,
 not whether the entity is non-collidable for other reasons such as being
 dead. */
isCollidable(): boolean;
/** Set entity jump state
 
 Setting to true will mark the entity to jump.
 
 Setting to false will unmark the entity to jump but will not stop a jump already in-progress. */
setJumping(jumping: boolean): void;
/** Checks to see if an entity is currently using the Riptide enchantment. */
isRiptiding(): boolean;
/** Checks whether the living entity has block line of sight to another.
 
 This uses the same algorithm that hostile mobs use to find the closest
 player. */
hasLineOfSight(other: org_bukkit_entity_Entity): boolean;
/** Whether or not this entity is using or charging an attack (Bow pulled back, drinking potion, eating food) */
isHandRaised(): boolean;
/** Get's remaining time a player needs to keep hands raised with an item to finish using it. */
getItemUseRemainingTime(): number;
/** Get how long the players hands have been raised (Charging Bow attack, using a potion, etc) */
getHandRaisedTime(): number;
/** Get the delay (in ticks) before blocking is effective for this entity */
getShieldBlockingDelay(): number;
/** Gets information about the entity being targeted */
getTargetEntity(maxDistance: number): org_bukkit_entity_Entity | null;
/** Gets information about the entity being targeted */
getTargetEntity(maxDistance: number, ignoreBlocks: boolean): org_bukkit_entity_Entity | null;
/** Set the delay (in ticks) before blocking is effective for this entity */
setShieldBlockingDelay(delay: number): void;
/** Sets the leash on this entity to be held by the supplied entity.
 
 This method has no effect on EnderDragons, Withers, Players, or Bats.
 Non-living entities excluding leashes will not persist as leash
 holders. */
setLeashHolder(holder: org_bukkit_entity_Entity | null): boolean | null;
/** Returns whether the entity is currently leashed. */
isLeashed(): boolean;
/** Gets the entity that is currently leading this entity. */
getLeashHolder(): org_bukkit_entity_Entity;
/** Gets the height of the living entity's eyes above its Location. */
getEyeHeight(): number;
/** Gets the height of the living entity's eyes above its Location. */
getEyeHeight(ignorePose: boolean): number;
/** Get a Location detailing the current eye position of the living entity. */
getEyeLocation(): org_bukkit_Location;
/** Gets all blocks along the living entity's line of sight.
 
 This list contains all blocks from the living entity's eye position to
 target inclusive. This method considers all blocks as 1x1x1 in size. */
getLineOfSight(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): java_util_List<org_bukkit_block_Block> | null;
/** Gets the block that the living entity has targeted.
 
 This method considers all blocks as 1x1x1 in size. To take exact block
 collision shapes into account, see getTargetBlockExact(int,
 FluidCollisionMode). */
getTargetBlock(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted */
getTargetBlock(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted, ignoring fluids */
getTargetBlock(maxDistance: number): org_bukkit_block_Block | null;
/** Gets the blockface of that block that the living entity has targeted */
getTargetBlockFace(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_BlockFace | null;
/** Gets the blockface of that block that the living entity has targeted, ignoring fluids */
getTargetBlockFace(maxDistance: number): org_bukkit_block_BlockFace | null;
/** Gets information about the block the living entity has targeted, ignoring fluids */
getTargetBlockInfo(maxDistance: number): com_destroystokyo_paper_block_TargetBlockInfo | null;
/** Gets information about the block the living entity has targeted */
getTargetBlockInfo(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): com_destroystokyo_paper_block_TargetBlockInfo | null;
/** Returns the amount of air that the living entity has remaining, in
 ticks. */
getRemainingAir(): number;
/** Gets information about the entity being targeted */
getTargetEntityInfo(maxDistance: number): com_destroystokyo_paper_entity_TargetEntityInfo | null;
/** Gets information about the entity being targeted */
getTargetEntityInfo(maxDistance: number, ignoreBlocks: boolean): com_destroystokyo_paper_entity_TargetEntityInfo | null;
/** Gets the last two blocks along the living entity's line of sight.
 
 The target block will be the last block in the list. This method
 considers all blocks as 1x1x1 in size. */
getLastTwoTargetBlocks(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): java_util_List<org_bukkit_block_Block> | null;
/** Gets the block that the living entity has targeted.
 
 This takes the blocks' precise collision shapes into account. Fluids are
 ignored.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
getTargetBlockExact(maxDistance: number): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted.
 
 This takes the blocks' precise collision shapes into account.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
getTargetBlockExact(maxDistance: number, fluidCollisionMode: org_bukkit_FluidCollisionMode): org_bukkit_block_Block | null;
/** Sets the amount of air that the living entity has remaining, in ticks. */
setRemainingAir(ticks: number): void;
/** Returns the maximum amount of air the living entity can have, in ticks. */
getMaximumAir(): number;
/** Sets the maximum amount of air the living entity can have, in ticks. */
setMaximumAir(ticks: number): void;
/** Returns the living entity's current maximum no damage ticks.
 
 This is the maximum duration in which the living entity will not take
 damage. */
getMaximumNoDamageTicks(): number;
/** Sets the living entity's current maximum no damage ticks. */
setMaximumNoDamageTicks(ticks: number): void;
/** Returns the living entity's last damage taken in the current no damage
 ticks time.
 
 Only damage higher than this amount will further damage the living
 entity. */
getLastDamage(): number;
/** Sets the damage dealt within the current no damage ticks time period. */
setLastDamage(damage: number): void;
/** Returns the living entity's current no damage ticks. */
getNoDamageTicks(): number;
/** Sets the living entity's current no damage ticks. */
setNoDamageTicks(ticks: number): void;
/** Gets the player identified as the killer of the living entity.
 
 May be null. */
getKiller(): org_bukkit_entity_Player | null;
/** Sets the player identified as the killer of the living entity. */
setKiller(killer: org_bukkit_entity_Player | null): void | null;
/** Adds the given PotionEffect to the living entity.
 
 Only one potion effect can be present for a given PotionEffectType. */
addPotionEffect(effect: org_bukkit_potion_PotionEffect, force: boolean): boolean;
/** Adds the given PotionEffect to the living entity. */
addPotionEffect(effect: org_bukkit_potion_PotionEffect): boolean;
/** Attempts to add all of the given PotionEffect to the living
 entity. */
addPotionEffects(effects: java_util_Collection<org_bukkit_potion_PotionEffect>): boolean;
/** Returns whether the living entity already has an existing effect of
 the given PotionEffectType applied to it. */
hasPotionEffect(type: org_bukkit_potion_PotionEffectType): boolean;
/** Returns the active PotionEffect of the specified type.
 
 If the effect is not present on the entity then null will be returned. */
getPotionEffect(type: org_bukkit_potion_PotionEffectType): org_bukkit_potion_PotionEffect | null;
/** Removes any effects present of the given PotionEffectType. */
removePotionEffect(type: org_bukkit_potion_PotionEffectType): void;
/** Returns all currently active PotionEffects on the living
 entity. */
getActivePotionEffects(): java_util_Collection<org_bukkit_potion_PotionEffect>;
/** Returns if the living entity despawns when away from players or not.
 
 By default, animals are not removed while other mobs are. */
getRemoveWhenFarAway(): boolean;
/** Sets whether or not the living entity despawns when away from players
 or not. */
setRemoveWhenFarAway(remove: boolean): void;
/** Sets whether or not the living entity can pick up items. */
setCanPickupItems(pickup: boolean): void;
/** Gets if the living entity can pick up items. */
getCanPickupItems(): boolean;
/** Makes entity start or stop gliding. This will work even if an Elytra
 is not equipped, but will be reverted by the server immediately after
 unless an event-cancelling mechanism is put in place. */
setGliding(gliding: boolean): void;
/** Sets whether an entity will have AI.

 The entity will be completely unable to move if it has no AI. */
setAI(ai: boolean): void;
/** Checks whether an entity has AI.

 The entity will be completely unable to move if it has no AI. */
hasAI(): boolean;
/** Makes this entity swing their main hand.

 This method does nothing if this entity does not have an animation for
 swinging their main hand. */
swingMainHand(): void;
/** Makes this entity swing their off hand.

 This method does nothing if this entity does not have an animation for
 swinging their off hand. */
swingOffHand(): void;
/** Set if this entity will be subject to collisions other entities.
 
 Note that collisions are bidirectional, so this method would need to be
 set to false on both the collidee and the collidant to ensure no
 collisions take place. */
setCollidable(collidable: boolean): void;
/** Returns the value of the memory specified.
 
 Note that the value is null when the specific entity does not have that
 value by default. */
getMemory<T extends java_lang_Object>(memoryKey: org_bukkit_entity_memory_MemoryKey<T>): T | null;
/** Get the number of arrows stuck in this entity */
getArrowsStuck(): number;
/** Set the number of arrows stuck in this entity */
setArrowsStuck(arrows: number): void;
/** Get's the item being actively "used" or consumed. */
getActiveItem(): org_bukkit_inventory_ItemStack | null;
/** Get entity jump state.
 
 Jump state will be true when the entity has been marked to jump. */
isJumping(): boolean;
/** Gets the specified attribute instance from the object. This instance will
 be backed directly to the object and any changes will be visible at once. */
getAttribute(attribute: org_bukkit_attribute_Attribute): org_bukkit_attribute_AttributeInstance | null;
getHealth(): number;
getMaxHealth(): number;
damage(arg0: number, arg1: org_bukkit_entity_Entity): void;
damage(arg0: number): void;
setHealth(arg0: number): void;
getAbsorptionAmount(): number;
setAbsorptionAmount(arg0: number): void;
setMaxHealth(arg0: number): void;
resetMaxHealth(): void;
/** Returns false if the entity has died or been despawned for some other
 reason. */
isValid(): boolean;
/** Mark the entity's removal. */
remove(): void;
/** Check if a vehicle has passengers. */
isEmpty(): boolean;
getLocation(): org_bukkit_Location;
getLocation(arg0: org_bukkit_Location): org_bukkit_Location;
/** Get the type of the entity. */
getType(): org_bukkit_entity_EntityType;
/** Gets the location where this entity originates from.
 
 This value can be null if the entity hasn't yet been added to the world. */
getOrigin(): org_bukkit_Location | null;
/** Get the vehicle that this player is inside. If there is no vehicle,
 null will be returned. */
getVehicle(): org_bukkit_entity_Entity | null;
/** Gets a list of passengers of this vehicle.
 
 The returned list will not be directly linked to the entity's current
 passengers, and no guarantees are made as to its mutability. */
getPassengers(): java_util_List<org_bukkit_entity_Entity>;
/** Returns true if the entity gets persisted.
 
 By default all entities are persistent. An entity will also not get
 persisted, if it is riding an entity that is not persistent.
 
 The persistent flag on players controls whether or not to save their
 playerdata file when they quit. If a player is directly or indirectly
 riding a non-persistent entity, the vehicle at the root and all its
 passengers won't get persisted.
 
 This should not be confused with
 LivingEntity.setRemoveWhenFarAway(boolean) which controls
 despawning of living entities.  */
isPersistent(): boolean;
/** Gets the current world this entity resides in */
getWorld(): org_bukkit_World;
/** Gets the entity's width */
getWidth(): number;
/** Gets the entity's height */
getHeight(): number;
/** Gets the Server that contains this Entity */
getServer(): org_bukkit_Server;
spigot(): org_bukkit_entity_Entity_Spigot;
spigot(): org_bukkit_command_CommandSender_Spigot;
/** Gets the entity's current bounding box.
 
 The returned bounding box reflects the entity's current location and
 size. */
getBoundingBox(): org_bukkit_util_BoundingBox;
/** Performs the specified EntityEffect for this entity.
 
 This will be viewable to all players near the entity.
 
 If the effect is not applicable to this class of entity, it will not play. */
playEffect(type: org_bukkit_EntityEffect): void;
/** Returns a list of entities within a bounding box centered around this
 entity */
getNearbyEntities(x: number, y: number, z: number): java_util_List<org_bukkit_entity_Entity>;
/** Gets whether the entity is invulnerable or not. */
isInvulnerable(): boolean;
/** Returns the reaction of the entity when moved by a piston. */
getPistonMoveReaction(): org_bukkit_block_PistonMoveReaction;
/** Gets the latest chunk an entity is currently or was in. */
getChunk(): org_bukkit_Chunk;
/** Returns a unique and persistent id for this entity */
getUniqueId(): java_util_UUID;
/** Returns the entity's maximum fire ticks. */
getMaxFireTicks(): number;
/** Returns a set of tags for this entity.
 
 Entities can have no more than 1024 tags. */
getScoreboardTags(): java_util_Set<string>;
/** Add a tag to this entity.
 
 Entities can have no more than 1024 tags. */
addScoreboardTag(tag: string): boolean;
/** Removes a given tag from this entity. */
removeScoreboardTag(tag: string): boolean;
/** Gets the entity's current pose.

 Note that the pose is only updated at the end of a tick, so may be
 inconsistent with other methods. eg Player.isSneaking() being
 true does not imply the current pose will be Pose.SNEAKING */
getPose(): org_bukkit_entity_Pose;
/** Gets whether the entity is silent or not. */
isSilent(): boolean;
/** Sets whether the entity is silent or not.
 
 When an entity is silent it will not produce any sound. */
setSilent(flag: boolean): void;
/** Sets whether or not to display the mob's custom name client side. The
 name will be displayed above the mob similarly to a player.
 
 This value has no effect on players, they will always display their
 name. */
setCustomNameVisible(flag: boolean): void;
/** Add a passenger to the vehicle. */
addPassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Remove a passenger from the vehicle. */
removePassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Get the closest cardinal BlockFace direction an entity is
 currently facing.
 
 This will not return any non-cardinal directions such as
 BlockFace.UP or BlockFace.DOWN.
 
 Hanging entities will override this call and thus their behavior
 may be different. */
getFacing(): org_bukkit_block_BlockFace;
/** Sets whether the entity is invulnerable or not.
 
 When an entity is invulnerable it can only be damaged by players in
 creative mode. */
setInvulnerable(flag: boolean): void;
/** Teleports this entity to the target Entity. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(destination: org_bukkit_entity_Entity, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
/** Teleports this entity to the given location. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(location: org_bukkit_Location): boolean;
/** Teleports this entity to the given location. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(location: org_bukkit_Location, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
/** Teleports this entity to the target Entity. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(destination: org_bukkit_entity_Entity): boolean;
/** Gets this entity's current velocity */
getVelocity(): org_bukkit_util_Vector;
/** Sets this entity's velocity */
setVelocity(velocity: org_bukkit_util_Vector): void;
/** Returns true if the entity is supported by a block. This value is a
 state updated by the server and is not recalculated unless the entity
 moves. */
isOnGround(): boolean;
/** Sets the entity's rotation.
 
 Note that if the entity is affected by AI, it may override this rotation. */
setRotation(yaw: number, pitch: number): void;
/** Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready. */
teleportAsync(loc: org_bukkit_Location, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
/** Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready. */
teleportAsync(loc: org_bukkit_Location): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
/** Returns a unique id for this entity */
getEntityId(): number;
/** Returns the entity's current fire ticks (ticks before the entity stops
 being on fire). */
getFireTicks(): number;
/** Sets the entity's current fire ticks (ticks before the entity stops
 being on fire). */
setFireTicks(ticks: number): void;
/** Returns true if this entity has been marked for removal. */
isDead(): boolean;
/** Sets whether or not the entity gets persisted. */
setPersistent(persistent: boolean): void;
/** Gets the primary passenger of a vehicle. For vehicles that could have
 multiple passengers, this will only return the primary passenger. */
getPassenger(): org_bukkit_entity_Entity | null;
/** Set the passenger of a vehicle. */
setPassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Eject any passenger. */
eject(): boolean;
/** Returns the distance this entity has fallen */
getFallDistance(): number;
/** Sets the fall distance for this entity */
setFallDistance(distance: number): void;
/** Record the last EntityDamageEvent inflicted on this entity */
setLastDamageCause(event: org_bukkit_event_entity_EntityDamageEvent | null): void | null;
/** Retrieve the last EntityDamageEvent inflicted on this entity.
 This event may have been cancelled. */
getLastDamageCause(): org_bukkit_event_entity_EntityDamageEvent | null;
/** Gets the amount of ticks this entity has lived for.
 
 This is the equivalent to "age" in entities. */
getTicksLived(): number;
/** Sets the amount of ticks this entity has lived for.
 
 This is the equivalent to "age" in entities. May not be less than one
 tick. */
setTicksLived(value: number): void;
/** Returns whether this entity is inside a vehicle. */
isInsideVehicle(): boolean;
/** Leave the current vehicle. If the entity is currently in a vehicle (and
 is removed from it), true will be returned, otherwise false will be
 returned. */
leaveVehicle(): boolean;
/** Gets whether or not the mob's custom name is displayed client side.
 
 This value has no effect on players, they will always display their
 name. */
isCustomNameVisible(): boolean;
/** Sets whether the entity has a team colored (default: white) glow.

 nb: this refers to the 'Glowing' entity property, not whether a
 glowing potion effect is applied */
setGlowing(flag: boolean): void;
/** Gets whether the entity is glowing or not.

 nb: this refers to the 'Glowing' entity property, not whether a
 glowing potion effect is applied */
isGlowing(): boolean;
/** Returns whether gravity applies to this entity. */
hasGravity(): boolean;
/** Sets whether gravity applies to this entity. */
setGravity(gravity: boolean): void;
/** Gets the period of time (in ticks) before this entity can use a portal. */
getPortalCooldown(): number;
/** Sets the period of time (in ticks) before this entity can use a portal. */
setPortalCooldown(cooldown: number): void;
/** Returns whether this entity was spawned from a mob spawner. */
fromMobSpawner(): boolean;
getEntitySpawnReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
/** Sets a metadata value in the implementing object's metadata store. */
setMetadata(metadataKey: string, newMetadataValue: org_bukkit_metadata_MetadataValue): void;
/** Returns a list of previously set metadata values from the implementing
 object's metadata store. */
getMetadata(metadataKey: string): java_util_List<org_bukkit_metadata_MetadataValue>;
/** Tests to see whether the implementing object contains the given
 metadata value in its metadata store. */
hasMetadata(metadataKey: string): boolean;
/** Removes the given metadata value from the implementing object's
 metadata store. */
removeMetadata(metadataKey: string, owningPlugin: org_bukkit_plugin_Plugin): void;
/** Gets the name of this command sender */
getName(): string;
/** Sends this sender a message */
sendMessage(message: string): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(component: net_md_5_bungee_api_chat_BaseComponent): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(...component: net_md_5_bungee_api_chat_BaseComponent[]): void;
/** Sends this sender a message */
sendMessage(message: string[]): void;
/** Checks if this object contains an override for the specified
 permission, by fully qualified name */
isPermissionSet(name: string): boolean;
/** Checks if this object contains an override for the specified Permission */
isPermissionSet(perm: org_bukkit_permissions_Permission): boolean;
/** Gets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned */
hasPermission(perm: org_bukkit_permissions_Permission): boolean;
/** Gets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned. */
hasPermission(name: string): boolean;
/** Temporarily adds a new empty PermissionAttachment to this
 object */
addAttachment(plugin: org_bukkit_plugin_Plugin, ticks: number): org_bukkit_permissions_PermissionAttachment | null;
/** Temporarily adds a new PermissionAttachment with a single
 permission by name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean, ticks: number): org_bukkit_permissions_PermissionAttachment | null;
/** Adds a new empty PermissionAttachment to this object */
addAttachment(plugin: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
/** Adds a new PermissionAttachment with a single permission by
 name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean): org_bukkit_permissions_PermissionAttachment;
/** Removes the given PermissionAttachment from this object */
removeAttachment(attachment: org_bukkit_permissions_PermissionAttachment): void;
/** Recalculates the permissions for this object, if the attachments have
 changed values.
 
 This should very rarely need to be called from a plugin. */
recalculatePermissions(): void;
/** Gets a set containing all of the permissions currently in effect by
 this object */
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
/** Checks if this object is a server operator */
isOp(): boolean;
/** Sets the operator status of this object */
setOp(value: boolean): void;
/** Gets the custom name on a mob or block. If there is no name this method
 will return null.
 
 This value has no effect on players, they will always use their real
 name. */
getCustomName(): string | null;
/** Sets a custom name on a mob or block. This name will be used in death
 messages and can be sent to the client as a nameplate over the mob.
 
 Setting the name to null or an empty string will clear it.
 
 This value has no effect on players, they will always use their real
 name. */
setCustomName(name: string | null): void | null;
/** Returns a custom tag container capable of storing tags on the object.

 Note that the tags stored on this container are all stored under their
 own custom namespace therefore modifying default tags using this
 PersistentDataHolder is impossible. */
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;
/** Launches a Projectile from the ProjectileSource. */
launchProjectile<T extends org_bukkit_entity_Projectile>(projectile: java_lang_Class<T>): T;
/** Launches a Projectile from the ProjectileSource with an
 initial velocity. */
launchProjectile<T extends org_bukkit_entity_Projectile>(projectile: java_lang_Class<T>, velocity: org_bukkit_util_Vector | null): T | null;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { AreaEffectCloud as org_bukkit_entity_AreaEffectCloud, LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, DragonFireball as org_bukkit_entity_DragonFireball } from 'org.bukkit.entity';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a DragonFireball collides with a block/entity and spawns an AreaEffectCloud */

  export class EnderDragonFireballHitEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
targets: java_util_Collection<org_bukkit_entity_LivingEntity>;
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
targets: java_util_Collection<org_bukkit_entity_LivingEntity> | null;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_DragonFireball;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getAreaEffectCloud(): org_bukkit_entity_AreaEffectCloud;
/** The living entities hit by fireball

 May be null if no entities were hit */
getTargets(): java_util_Collection<org_bukkit_entity_LivingEntity> | null;
/** The fireball involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** The fireball involved in this event */
getEntity(): org_bukkit_entity_DragonFireball;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(fireball: org_bukkit_entity_DragonFireball, targets: java_util_Collection<org_bukkit_entity_LivingEntity> | null, areaEffectCloud: org_bukkit_entity_AreaEffectCloud);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { AreaEffectCloud as org_bukkit_entity_AreaEffectCloud, EnderDragon as org_bukkit_entity_EnderDragon, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an EnderDragon spawns an AreaEffectCloud by shooting flames */

  export class EnderDragonFlameEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
areaEffectCloud: org_bukkit_entity_AreaEffectCloud;
entity: org_bukkit_entity_EnderDragon;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getAreaEffectCloud(): org_bukkit_entity_AreaEffectCloud;
/** The enderdragon involved in this event */
getEntity(): org_bukkit_entity_EnderDragon;
/** The enderdragon involved in this event */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(enderDragon: org_bukkit_entity_EnderDragon, areaEffectCloud: org_bukkit_entity_AreaEffectCloud);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { DragonFireball as org_bukkit_entity_DragonFireball, EnderDragon as org_bukkit_entity_EnderDragon, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an EnderDragon shoots a fireball */

  export class EnderDragonShootFireballEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
fireball: org_bukkit_entity_DragonFireball;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
fireball: org_bukkit_entity_DragonFireball;
entity: org_bukkit_entity_EnderDragon;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getFireball(): org_bukkit_entity_DragonFireball;
/** The enderdragon shooting the fireball */
getEntity(): org_bukkit_entity_EnderDragon;
/** The enderdragon shooting the fireball */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_EnderDragon, fireball: org_bukkit_entity_DragonFireball);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Enderman as org_bukkit_entity_Enderman, Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an Enderman determines if it should attack a player or not.
 Starts off cancelled if the player is wearing a pumpkin head or is not looking
 at the Enderman, according to Vanilla rules. */

  export class EndermanAttackPlayerEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
player: org_bukkit_entity_Player;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Enderman;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
player: org_bukkit_entity_Player;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** The enderman considering attacking */
getEntity(): org_bukkit_entity_Enderman;
/** The enderman considering attacking */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** The player the Enderman is considering attacking */
getPlayer(): org_bukkit_entity_Player;
/** Cancels if the Enderman will attack this player */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_Enderman, player: org_bukkit_entity_Player);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Enderman as org_bukkit_entity_Enderman, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class EndermanEscapeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
reason: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Enderman;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
reason: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Enderman;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Cancels the escape.

 If this escape normally would of resulted in damage avoidance such as indirect,
 the enderman will now take damage. */
setCancelled(cancel: boolean): void;
getReason(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_Enderman, reason: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent' {
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Reason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason> {
static RUNAWAY: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static INDIRECT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static CRITICAL_HIT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static STARE: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static DROWN: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static $VALUES: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (EndermanEscapeEvent.Reason c : EndermanEscapeEvent.Reason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent' {
import { Reason as com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason } from 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Reason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason> {
static RUNAWAY: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static INDIRECT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static CRITICAL_HIT: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static STARE: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static DROWN: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
static $VALUES: com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (EndermanEscapeEvent.Reason c : EndermanEscapeEvent.Reason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_entity_EndermanEscapeEvent_Reason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired any time an entity is being added to the world for any reason.

 Not to be confused with CreatureSpawnEvent
 This will fire anytime a chunk is reloaded too. */

  export class EntityAddToWorldEvent extends org_bukkit_event_entity_EntityEvent {
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Called when an entity jumps
 
 Cancelling the event will stop the entity from jumping */

  export class EntityJumpEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
canceled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_LivingEntity;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_LivingEntity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_LivingEntity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Entity as org_bukkit_entity_Entity, LivingEntity as org_bukkit_entity_LivingEntity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an Entity is knocked back by the hit of another Entity. The acceleration
 vector can be modified. If this event is cancelled, the entity is not knocked back. */

  export class EntityKnockbackByEntityEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
hitBy: org_bukkit_entity_Entity;
knockbackStrength: number;
acceleration: org_bukkit_util_Vector;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
knockbackStrength: number;
acceleration: org_bukkit_util_Vector;
hitBy: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_LivingEntity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getKnockbackStrength(): number;
getAcceleration(): org_bukkit_util_Vector;
getHitBy(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_LivingEntity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_LivingEntity, hitBy: org_bukkit_entity_Entity, knockbackStrength: number, acceleration: org_bukkit_util_Vector);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an Entity decides to start moving towards a location.

 This event does not fire for the entities actual movement. Only when it
 is choosing to start moving to a location. */

  export class EntityPathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
targetEntity: org_bukkit_entity_Entity;
loc: org_bukkit_Location;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
loc: org_bukkit_Location;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
targetEntity: org_bukkit_entity_Entity | null;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** The Location of where the entity is about to move to.

 Note that if the target happened to of been an entity */
getLoc(): org_bukkit_Location;
/** The Entity that is pathfinding. */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** If the Entity is trying to pathfind to an entity, this is the entity in relation.

 Otherwise this will return null. */
getTargetEntity(): org_bukkit_entity_Entity | null;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_Entity, loc: org_bukkit_Location, targetEntity: org_bukkit_entity_Entity | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired any time an entity is being removed from a world for any reason */

  export class EntityRemoveFromWorldEvent extends org_bukkit_event_entity_EntityEvent {
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EndGateway as org_bukkit_block_EndGateway } from 'org.bukkit.block';
import { EntityType as org_bukkit_entity_EntityType, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { EntityTeleportEvent as org_bukkit_event_entity_EntityTeleportEvent } from 'org.bukkit.event.entity';
/** Fired any time an entity attempts to teleport in an end gateway */

  export class EntityTeleportEndGatewayEvent extends org_bukkit_event_entity_EntityTeleportEvent {
gateway: org_bukkit_block_EndGateway;
gateway: org_bukkit_block_EndGateway;
entityType: org_bukkit_entity_EntityType;
entity: org_bukkit_entity_Entity;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** The gateway triggering the teleport */
getGateway(): org_bukkit_block_EndGateway;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Returns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(what: org_bukkit_entity_Entity, from: org_bukkit_Location, to: org_bukkit_Location, gateway: org_bukkit_block_EndGateway);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when an entity transforms into another entity
 
 If the event is cancelled, the entity will not transform */

  export class EntityTransformedEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
transformed: org_bukkit_entity_Entity;
reason: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
handlers: org_bukkit_event_HandlerList;
transformed: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
reason: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** The entity after it has transformed */
getTransformed(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
getReason(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_Entity, transformed: org_bukkit_entity_Entity, reason: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EntityTransformedEvent' {
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TransformedReason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason> {
static DROWNED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static CURED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static INFECTED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static SHEARED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static LIGHTNING: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static $VALUES: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (EntityTransformedEvent.TransformedReason c : EntityTransformedEvent.TransformedReason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity.EntityTransformedEvent' {
import { TransformedReason as com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason } from 'com.destroystokyo.paper.event.entity.EntityTransformedEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TransformedReason extends java_lang_Enum<com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason> {
static DROWNED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static CURED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static INFECTED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static SHEARED: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static LIGHTNING: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
static $VALUES: com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (EntityTransformedEvent.TransformedReason c : EntityTransformedEvent.TransformedReason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_entity_EntityTransformedEvent_TransformedReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { LightningStrike as org_bukkit_entity_LightningStrike, Entity as org_bukkit_entity_Entity, EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityTransformEvent as org_bukkit_event_entity_EntityTransformEvent } from 'org.bukkit.event.entity';
/** Fired when lightning strikes an entity */

  export class EntityZapEvent extends org_bukkit_event_entity_EntityTransformEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
bolt: org_bukkit_entity_LightningStrike;
handlers: org_bukkit_event_HandlerList;
bolt: org_bukkit_entity_LightningStrike;
replacementEntity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
entityType: org_bukkit_entity_EntityType;
entity: org_bukkit_entity_Entity;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Gets the lightning bolt that is striking the entity. */
getBolt(): org_bukkit_entity_LightningStrike;
/** Gets the entity that will replace the struck entity. */
getReplacementEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Returns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(entity: org_bukkit_entity_Entity, bolt: org_bukkit_entity_LightningStrike, replacementEntity: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ExperienceOrb as org_bukkit_entity_ExperienceOrb } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired anytime the server is about to merge 2 experience orbs into one */

  export class ExperienceOrbMergeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
mergeTarget: org_bukkit_entity_ExperienceOrb;
mergeSource: org_bukkit_entity_ExperienceOrb;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
mergeTarget: org_bukkit_entity_ExperienceOrb;
mergeSource: org_bukkit_entity_ExperienceOrb;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getMergeTarget(): org_bukkit_entity_ExperienceOrb;
getMergeSource(): org_bukkit_entity_ExperienceOrb;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(mergeTarget: org_bukkit_entity_ExperienceOrb, mergeSource: org_bukkit_entity_ExperienceOrb);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Set as java_util_Set } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty, PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Fired once a profiles additional properties (such as textures) has been filled */

  export class FillProfileEvent extends org_bukkit_event_Event {
profile: com_destroystokyo_paper_profile_PlayerProfile;
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
static handlerList: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Same as .getPlayerProfile().getProperties() */
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
static getHandlerList(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(profile: com_destroystokyo_paper_profile_PlayerProfile);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Represents an AI goal of an entity */

  export class Goal<T extends org_bukkit_entity_Mob> {
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** Called each tick the goal is activated */
tick(): void;
/** A unique key that identifies this type of goal. Plugins should use their own namespace, not the minecraft
 namespace. Additionally, this key also specifies to what mobs this goal can be applied to */
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
/** Called when this goal gets activated */
start(): void;
/** Called when this goal gets stopped */
stop(): void;
/** Returns a list of all applicable flags for this goal.

 This method is only called on construction. */
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** Checks if this goal should stay active, defaults to shouldActivate() */
shouldStayActive(): boolean;
/** Checks if this goal should be activated */
shouldActivate(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { NamespacedKey as org_bukkit_NamespacedKey } from 'org.bukkit';
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey } from 'com.destroystokyo.paper.entity.ai';
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Used to identify a Goal. Consists of a NamespacedKey and the type of mob the goal can be applied to */

  export class GoalKey<T extends org_bukkit_entity_Mob> extends java_lang_Object {
entityClass: java_lang_Class<T>;
namespacedKey: org_bukkit_NamespacedKey;
namespacedKey: org_bukkit_NamespacedKey;
entityClass: java_lang_Class<T>;
equals(o: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static of<A extends org_bukkit_entity_Mob>(entityClass: java_lang_Class<A>, namespacedKey: org_bukkit_NamespacedKey): com_destroystokyo_paper_entity_ai_GoalKey<A>;
getNamespacedKey(): org_bukkit_NamespacedKey;
getEntityClass(): java_lang_Class<T>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalType as com_destroystokyo_paper_entity_ai_GoalType } from 'com.destroystokyo.paper.entity.ai';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Represents the subtype of a goal. Used by minecraft to disable certain types of goals if needed. */

  export class GoalType extends java_lang_Enum<com_destroystokyo_paper_entity_ai_GoalType> {
static MOVE: com_destroystokyo_paper_entity_ai_GoalType;
static LOOK: com_destroystokyo_paper_entity_ai_GoalType;
static JUMP: com_destroystokyo_paper_entity_ai_GoalType;
static TARGET: com_destroystokyo_paper_entity_ai_GoalType;
static $VALUES: com_destroystokyo_paper_entity_ai_GoalType[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (GoalType c : GoalType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_entity_ai_GoalType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_entity_ai_GoalType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse, QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { InetAddress as java_net_InetAddress } from 'java.net';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** This event is fired if server is getting queried over GS4 Query protocol

 Adapted from Velocity's ProxyQueryEvent */

  export class GS4QueryEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
queryType: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
querierAddress: java_net_InetAddress;
response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
handlers: org_bukkit_event_HandlerList;
response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
queryType: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
querierAddress: java_net_InetAddress;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
toString(): string;
/** Get query response */
getResponse(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
/** Get query type */
getQueryType(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
/** Get querier address */
getQuerierAddress(): java_net_InetAddress;
/** Set query response */
setResponse(response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse): void;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(queryType: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType, querierAddress: java_net_InetAddress, response: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class QueryResponse extends java_lang_Object {
motd: string;
gameVersion: string;
map: string;
currentPlayers: number;
maxPlayers: number;
hostname: string;
port: number;
players: java_util_Collection<string>;
serverVersion: string;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
port: number;
map: string;
hostname: string;
currentPlayers: number;
serverVersion: string;
gameVersion: string;
maxPlayers: number;
players: java_util_Collection<string>;
motd: string;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
/** Creates a new GS4QueryEvent.QueryResponse.Builder instance */
static builder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Get server (public facing) port */
getPort(): number;
/** Get map name which will be used to reply to the query. By default world is sent. */
getMap(): string;
/** Get server (public facing) hostname */
getHostname(): string;
/** Creates a new GS4QueryEvent.QueryResponse.Builder instance from data represented by this response */
toBuilder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Get current online player count which will be used to reply to the query. */
getCurrentPlayers(): number;
/** Get server software (name and version) which will be used to reply to the query. */
getServerVersion(): string;
/** Get game version which will be used to reply to the query. By default supported Minecraft versions range is sent. */
getGameVersion(): string;
/** Get max player count which will be used to reply to the query. */
getMaxPlayers(): number;
/** Get collection of players which will be used to reply to the query. */
getPlayers(): java_util_Collection<string>;
/** Get motd which will be used to reply to the query. By default it is Server.getMotd(). */
getMotd(): string;
/** Get list of plugins which will be used to reply to the query. */
getPlugins(): java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
/** A builder for GS4QueryEvent.QueryResponse objects. */

  export class Builder extends java_lang_Object {
motd: string;
gameVersion: string;
map: string;
hostname: string;
serverVersion: string;
currentPlayers: number;
maxPlayers: number;
port: number;
players: java_util_List<string>;
plugins: java_util_List<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
hostname(hostname: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
map(map: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
port(port: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Builds new GS4QueryEvent.QueryResponse with supplied data */
build(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
serverVersion(serverVersion: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlugins(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
gameVersion(gameVersion: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlayers(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
currentPlayers(currentPlayers: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(...plugins: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
motd(motd: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(players: java_util_Collection<string>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(...players: string[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
maxPlayers(maxPlayers: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Object as java_lang_Object } from 'java.lang';
/** Plugin information */

  export class PluginInformation extends java_lang_Object {
name: string;
version: string;
version: string;
name: string;
getVersion(): string;
getName(): string;
static of(name: string, version: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation;
setName(name: string): void;
setVersion(version: string): void;
constructor(name: string, version: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** The type of query */

  export class QueryType extends java_lang_Enum<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType> {
static BASIC: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static FULL: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static $VALUES: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (GS4QueryEvent.QueryType c : GS4QueryEvent.QueryType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Collection as java_util_Collection } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class QueryResponse extends java_lang_Object {
motd: string;
gameVersion: string;
map: string;
currentPlayers: number;
maxPlayers: number;
hostname: string;
port: number;
players: java_util_Collection<string>;
serverVersion: string;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
port: number;
map: string;
hostname: string;
currentPlayers: number;
serverVersion: string;
gameVersion: string;
maxPlayers: number;
players: java_util_Collection<string>;
motd: string;
plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
/** Creates a new GS4QueryEvent.QueryResponse.Builder instance */
static builder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Get server (public facing) port */
getPort(): number;
/** Get map name which will be used to reply to the query. By default world is sent. */
getMap(): string;
/** Get server (public facing) hostname */
getHostname(): string;
/** Creates a new GS4QueryEvent.QueryResponse.Builder instance from data represented by this response */
toBuilder(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Get current online player count which will be used to reply to the query. */
getCurrentPlayers(): number;
/** Get server software (name and version) which will be used to reply to the query. */
getServerVersion(): string;
/** Get game version which will be used to reply to the query. By default supported Minecraft versions range is sent. */
getGameVersion(): string;
/** Get max player count which will be used to reply to the query. */
getMaxPlayers(): number;
/** Get collection of players which will be used to reply to the query. */
getPlayers(): java_util_Collection<string>;
/** Get motd which will be used to reply to the query. By default it is Server.getMotd(). */
getMotd(): string;
/** Get list of plugins which will be used to reply to the query. */
getPlugins(): java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { Builder as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder, PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { QueryResponse as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Collection as java_util_Collection, List as java_util_List } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
/** A builder for GS4QueryEvent.QueryResponse objects. */

  export class Builder extends java_lang_Object {
motd: string;
gameVersion: string;
map: string;
hostname: string;
serverVersion: string;
currentPlayers: number;
maxPlayers: number;
port: number;
players: java_util_List<string>;
plugins: java_util_List<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>;
hostname(hostname: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
map(map: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
port(port: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
/** Builds new GS4QueryEvent.QueryResponse with supplied data */
build(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse;
serverVersion(serverVersion: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlugins(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
gameVersion(gameVersion: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
clearPlayers(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
currentPlayers(currentPlayers: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(...plugins: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
plugins(plugins: java_util_Collection<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
motd(motd: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(players: java_util_Collection<string>): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
players(...players: string[]): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;
maxPlayers(maxPlayers: number): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_Builder;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse' {
import { PluginInformation as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation } from 'com.destroystokyo.paper.event.server.GS4QueryEvent.QueryResponse';
import { Object as java_lang_Object } from 'java.lang';
/** Plugin information */

  export class PluginInformation extends java_lang_Object {
name: string;
version: string;
version: string;
name: string;
getVersion(): string;
getName(): string;
static of(name: string, version: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryResponse_PluginInformation;
setName(name: string): void;
setVersion(version: string): void;
constructor(name: string, version: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server.GS4QueryEvent' {
import { QueryType as com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType } from 'com.destroystokyo.paper.event.server.GS4QueryEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** The type of query */

  export class QueryType extends java_lang_Enum<com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType> {
static BASIC: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static FULL: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
static $VALUES: com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (GS4QueryEvent.QueryType c : GS4QueryEvent.QueryType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_server_GS4QueryEvent_QueryType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { HeightmapType as com_destroystokyo_paper_HeightmapType } from 'com.destroystokyo.paper';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** Enumeration of different heightmap types maintained by the server. Generally using these maps is much faster
 than using an iterative search for a block in a given x, z coordinate. */

  export class HeightmapType extends java_lang_Enum<com_destroystokyo_paper_HeightmapType> {
static LIGHT_BLOCKING: com_destroystokyo_paper_HeightmapType;
static ANY: com_destroystokyo_paper_HeightmapType;
static SOLID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID: com_destroystokyo_paper_HeightmapType;
static SOLID_OR_LIQUID_NO_LEAVES: com_destroystokyo_paper_HeightmapType;
static $VALUES: com_destroystokyo_paper_HeightmapType[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (HeightmapType c : HeightmapType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_HeightmapType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_HeightmapType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { UUID as java_util_UUID } from 'java.util';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
/** Represents an Inventory that can generate loot, such as Minecarts inside of Mineshafts */

  export class LootableEntityInventory implements com_destroystokyo_paper_loottable_LootableInventory {
entity: org_bukkit_entity_Entity;
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable | null;
/** Gets the entity that is lootable */
getEntity(): org_bukkit_entity_Entity;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Exception as java_lang_Exception, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class IllegalPacketEvent extends org_bukkit_event_player_PlayerEvent {
type: string;
ex: string;
kickMessage: string;
shouldKick: boolean;
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
type: string | null;
exceptionMessage: string | null;
static handlerList: org_bukkit_event_HandlerList;
kickMessage: string | null;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getType(): string | null;
setKickMessage(kickMessage: string | null): void | null;
setShouldKick(shouldKick: boolean): void;
getExceptionMessage(): string | null;
isShouldKick(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
getKickMessage(): string | null;
static process(player: org_bukkit_entity_Player, type: string | null, kickMessage: string | null, exception: java_lang_Exception): void | null;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, type: string | null, kickMessage: string | null, e: java_lang_Exception);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.inventory' {
import { RecipeChoice as org_bukkit_inventory_RecipeChoice, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object } from 'java.lang';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { List as java_util_List } from 'java.util';
/** Allows crafting Items that require full matching itemstacks to complete the recipe for custom items */

  export class ItemStackRecipeChoice extends java_lang_Object implements org_bukkit_inventory_RecipeChoice {
choices: java_util_List<org_bukkit_inventory_ItemStack>;
itemStack: org_bukkit_inventory_ItemStack;
clone(): org_bukkit_inventory_RecipeChoice;
clone(): java_lang_Object;
test(itemStack: org_bukkit_inventory_ItemStack): boolean;
test(arg0: java_lang_Object): boolean;
/** Description copied from interface: RecipeChoiceGets a single item stack representative of this stack choice. */
getItemStack(): org_bukkit_inventory_ItemStack;
or(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
and(arg0: java_util_function_Predicate<java_lang_Object>): java_util_function_Predicate<T>;
negate(): java_util_function_Predicate<T>;
constructor(choices: org_bukkit_inventory_ItemStack);
constructor(choices: java_util_List<org_bukkit_inventory_ItemStack>);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Allows a plugin to be notified anytime AFTER a Profile has been looked up from the Mojang API
 This is an opportunity to view the response and potentially cache things.

 No guarantees are made about thread execution context for this event. If you need to know, check
 event.isAsync() */

  export class LookupProfileEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
profile: com_destroystokyo_paper_profile_PlayerProfile;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(profile: com_destroystokyo_paper_profile_PlayerProfile);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
/** Represents an Inventory that can generate loot, such as Chests inside of Fortresses and Mineshafts */

  export class LootableBlockInventory implements com_destroystokyo_paper_loottable_LootableInventory {
block: org_bukkit_block_Block;
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable | null;
/** Gets the block that is lootable */
getBlock(): org_bukkit_block_Block;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { UUID as java_util_UUID } from 'java.util';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
/** Represents an Inventory that can generate loot, such as Minecarts inside of Mineshafts */

  export class LootableEntityInventory implements com_destroystokyo_paper_loottable_LootableInventory {
entity: org_bukkit_entity_Entity;
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable | null;
/** Gets the entity that is lootable */
getEntity(): org_bukkit_entity_Entity;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { UUID as java_util_UUID } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Long as java_lang_Long } from 'java.lang';
import { LootTable as org_bukkit_loot_LootTable, Lootable as org_bukkit_loot_Lootable } from 'org.bukkit.loot';
/** Represents an Inventory that contains a Loot Table associated to it that will
 automatically fill on first open.

 A new feature and API is provided to support automatically refreshing the contents
 of the inventory based on that Loot Table after a configurable amount of time has passed.

 The behavior of how the Inventory is filled based on the loot table may vary based
 on Minecraft versions and the Loot Table feature. */

  export class LootableInventory implements org_bukkit_loot_Lootable {
lastFilled: number;
lastLooted: java_lang_Long | null;
lastLooted: java_lang_Long | null;
nextRefill: number;
seed: number;
lootTable: org_bukkit_loot_LootTable | null;
/** Server owners have to enable whether or not an object in a world should refill */
isRefillEnabled(): boolean;
/** Whether or not this object has ever been filled */
hasBeenFilled(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object was last refilled */
getLastFilled(): number;
/** Has this player ever looted this block */
hasPlayerLooted(player: java_util_UUID): boolean;
/** Has this player ever looted this block */
hasPlayerLooted(player: org_bukkit_entity_Player): boolean;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: java_util_UUID): java_lang_Long | null;
/** Gets the timestamp, in milliseconds, of when the player last looted this object */
getLastLooted(player: org_bukkit_entity_Player): java_lang_Long | null;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: java_util_UUID, looted: boolean): boolean;
/** Change the state of whether or not a player has looted this block */
setHasPlayerLooted(player: org_bukkit_entity_Player, looted: boolean): boolean;
/** Returns Whether or not this object has been filled and now has a pending refill */
hasPendingRefill(): boolean;
/** Gets the timestamp in milliseconds that the Lootable object will refill */
getNextRefill(): number;
/** Sets the timestamp in milliseconds of the next refill for this object */
setNextRefill(refillAt: number): number;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.loottable' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { LootableInventory as com_destroystokyo_paper_loottable_LootableInventory } from 'com.destroystokyo.paper.loottable';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class LootableInventoryReplenishEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
inventory: com_destroystokyo_paper_loottable_LootableInventory;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
inventory: com_destroystokyo_paper_loottable_LootableInventory;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
getInventory(): com_destroystokyo_paper_loottable_LootableInventory;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, inventory: com_destroystokyo_paper_loottable_LootableInventory);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { MaterialSetTag as com_destroystokyo_paper_MaterialSetTag } from 'com.destroystokyo.paper';
import { Material as org_bukkit_Material, Tag as org_bukkit_Tag, NamespacedKey as org_bukkit_NamespacedKey, Keyed as org_bukkit_Keyed } from 'org.bukkit';
import { Collection as java_util_Collection, Set as java_util_Set } from 'java.util';
import { Predicate as java_util_function_Predicate } from 'java.util.function';
import { Block as org_bukkit_block_Block, BlockState as org_bukkit_block_BlockState } from 'org.bukkit.block';
import { BlockData as org_bukkit_block_data_BlockData } from 'org.bukkit.block.data';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object } from 'java.lang';

  export class MaterialSetTag extends java_lang_Object implements org_bukkit_Tag<org_bukkit_Material> {
key: org_bukkit_NamespacedKey;
materials: java_util_Set<org_bukkit_Material>;
key: org_bukkit_NamespacedKey;
values: java_util_Set<org_bukkit_Material>;
not(tags: com_destroystokyo_paper_MaterialSetTag): com_destroystokyo_paper_MaterialSetTag;
not(...tags: org_bukkit_Material[]): com_destroystokyo_paper_MaterialSetTag;
not(materials: java_util_Collection<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
not(filter: java_util_function_Predicate<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
add(...tags: com_destroystokyo_paper_MaterialSetTag[]): com_destroystokyo_paper_MaterialSetTag;
add(filter: java_util_function_Predicate<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
add(...tags: org_bukkit_Tag<org_bukkit_Material>[]): com_destroystokyo_paper_MaterialSetTag;
add(materials: java_util_Collection<org_bukkit_Material>): com_destroystokyo_paper_MaterialSetTag;
add(...tags: org_bukkit_Material[]): com_destroystokyo_paper_MaterialSetTag;
startsWith(wit: string): com_destroystokyo_paper_MaterialSetTag;
endsWith(wit: string): com_destroystokyo_paper_MaterialSetTag;
contains(wit: string): com_destroystokyo_paper_MaterialSetTag;
/** Description copied from interface: KeyedReturn the namespaced identifier for this object. */
getKey(): org_bukkit_NamespacedKey;
ensureSize(label: string, size: number): com_destroystokyo_paper_MaterialSetTag;
notEndsWith(wit: string): com_destroystokyo_paper_MaterialSetTag;
notStartsWith(wit: string): com_destroystokyo_paper_MaterialSetTag;
isTagged(block: org_bukkit_block_Block): boolean;
isTagged(block: org_bukkit_block_data_BlockData): boolean;
/** Description copied from interface: TagReturns whether or not this tag has an entry for the specified item. */
isTagged(material: org_bukkit_Material): boolean;
isTagged(item: org_bukkit_inventory_ItemStack): boolean;
isTagged(block: org_bukkit_block_BlockState): boolean;
isTagged(arg0: org_bukkit_Keyed): boolean;
/** Description copied from interface: TagGets an immutable set of all tagged items. */
getValues(): java_util_Set<org_bukkit_Material>;
constructor(key: org_bukkit_NamespacedKey | null, materials: java_util_Collection<org_bukkit_Material>);
constructor(filter: java_util_function_Predicate<org_bukkit_Material>);
constructor(key: org_bukkit_NamespacedKey | null, filter: java_util_function_Predicate<org_bukkit_Material>);
constructor(materials: java_util_Collection<org_bukkit_Material>);
constructor(...filter: org_bukkit_Material[]);
constructor(key: org_bukkit_NamespacedKey | null, ...filter: org_bukkit_Material[]);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { MaterialSetTag as com_destroystokyo_paper_MaterialSetTag } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a collection tags to identify materials that share common properties.
 Will map to minecraft for missing tags, as well as custom ones that may be useful. */

  export class MaterialTags extends java_lang_Object {
static ARROWS: com_destroystokyo_paper_MaterialSetTag;
static BEDS: com_destroystokyo_paper_MaterialSetTag;
static BUCKETS: com_destroystokyo_paper_MaterialSetTag;
static COALS: com_destroystokyo_paper_MaterialSetTag;
static COBBLESTONE_WALLS: com_destroystokyo_paper_MaterialSetTag;
static COBBLESTONES: com_destroystokyo_paper_MaterialSetTag;
static CONCRETES: com_destroystokyo_paper_MaterialSetTag;
static CONCRETE_POWDER: com_destroystokyo_paper_MaterialSetTag;
static COOKED_FISH: com_destroystokyo_paper_MaterialSetTag;
static DYES: com_destroystokyo_paper_MaterialSetTag;
static FENCE_GATES: com_destroystokyo_paper_MaterialSetTag;
static FENCES: com_destroystokyo_paper_MaterialSetTag;
static FISH_BUCKETS: com_destroystokyo_paper_MaterialSetTag;
static GLASS: com_destroystokyo_paper_MaterialSetTag;
static GLASS_PANES: com_destroystokyo_paper_MaterialSetTag;
static GLAZED_TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static STAINED_TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static TERRACOTTA: com_destroystokyo_paper_MaterialSetTag;
static GOLDEN_APPLES: com_destroystokyo_paper_MaterialSetTag;
static HORSE_ARMORS: com_destroystokyo_paper_MaterialSetTag;
static INFESTED_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static MUSHROOM_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static MUSHROOMS: com_destroystokyo_paper_MaterialSetTag;
static MUSIC_DISCS: com_destroystokyo_paper_MaterialSetTag;
static ORES: com_destroystokyo_paper_MaterialSetTag;
static PISTONS: com_destroystokyo_paper_MaterialSetTag;
static POTATOES: com_destroystokyo_paper_MaterialSetTag;
static PRESSURE_PLATES: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE_SLABS: com_destroystokyo_paper_MaterialSetTag;
static PRISMARINE_STAIRS: com_destroystokyo_paper_MaterialSetTag;
static PUMPKINS: com_destroystokyo_paper_MaterialSetTag;
static QUARTZ_BLOCKS: com_destroystokyo_paper_MaterialSetTag;
static RAW_FISH: com_destroystokyo_paper_MaterialSetTag;
static RED_SANDSTONES: com_destroystokyo_paper_MaterialSetTag;
static SANDSTONES: com_destroystokyo_paper_MaterialSetTag;
static SPONGES: com_destroystokyo_paper_MaterialSetTag;
static SHULKER_BOXES: com_destroystokyo_paper_MaterialSetTag;
static SKULLS: com_destroystokyo_paper_MaterialSetTag;
static SPAWN_EGGS: com_destroystokyo_paper_MaterialSetTag;
static STAINED_GLASS: com_destroystokyo_paper_MaterialSetTag;
static STAINED_GLASS_PANES: com_destroystokyo_paper_MaterialSetTag;
static TRAPDOORS: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_FENCES: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_TRAPDOORS: com_destroystokyo_paper_MaterialSetTag;
static WOODEN_GATES: com_destroystokyo_paper_MaterialSetTag;
static PURPUR: com_destroystokyo_paper_MaterialSetTag;
static SIGNS: com_destroystokyo_paper_MaterialSetTag;
static TORCH: com_destroystokyo_paper_MaterialSetTag;
static REDSTONE_TORCH: com_destroystokyo_paper_MaterialSetTag;
static COLORABLE: com_destroystokyo_paper_MaterialSetTag;

constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { EventExecutor as org_bukkit_plugin_EventExecutor } from 'org.bukkit.plugin';

  export class MethodHandleEventExecutor extends java_lang_Object implements org_bukkit_plugin_EventExecutor {
eventClass: java_lang_Class<org_bukkit_event_Event>;
handle: java_lang_invoke_MethodHandle;
execute(listener: org_bukkit_event_Listener, event: org_bukkit_event_Event): void;
constructor(eventClass: java_lang_Class<org_bukkit_event_Event>, handle: java_lang_invoke_MethodHandle);
constructor(eventClass: java_lang_Class<org_bukkit_event_Event>, handle: java_lang_reflect_Method);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { GoalType as com_destroystokyo_paper_entity_ai_GoalType, GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, Goal as com_destroystokyo_paper_entity_ai_Goal } from 'com.destroystokyo.paper.entity.ai';
import { Collection as java_util_Collection } from 'java.util';
/** Represents a part of the "brain" of a mob. It tracks all tasks (running or not), allows adding and removing goals */

  export class MobGoals {
goal: com_destroystokyo_paper_entity_ai_Goal<T> | null;
goals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
allGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoals: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
runningGoalsWithout: java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
removeAllGoals<T extends org_bukkit_entity_Mob>(mob: T): void;
removeAllGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): void;
hasGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): boolean;
getGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): com_destroystokyo_paper_entity_ai_Goal<T> | null;
getGoals<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoals<T extends org_bukkit_entity_Mob>(mob: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getAllGoalsWithout<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoals<T extends org_bukkit_entity_Mob>(mob: T): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
getRunningGoalsWithout<T extends org_bukkit_entity_Mob>(mob: T, type: com_destroystokyo_paper_entity_ai_GoalType): java_util_Collection<com_destroystokyo_paper_entity_ai_Goal<T>>;
addGoal<T extends org_bukkit_entity_Mob>(mob: T, priority: number, goal: com_destroystokyo_paper_entity_ai_Goal<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(mob: T, key: com_destroystokyo_paper_entity_ai_GoalKey<T>): void;
removeGoal<T extends org_bukkit_entity_Mob>(mob: T, goal: com_destroystokyo_paper_entity_ai_Goal<T>): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {

/** Represents a namespaced resource, see NamespacedKey for single elements
 or NamespacedTag for a collection of elements

 Namespaces may only contain lowercase alphanumeric characters, periods,
 underscores, and hyphens.
 
 Keys may only contain lowercase alphanumeric characters, periods,
 underscores, hyphens, and forward slashes.
 
 You should not be implementing this interface yourself, use NamespacedKey
 or NamespacedTag as needed instead. */

  export class Namespaced {
key: string;
namespace: string;
/** Gets the key corresponding to this resource
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, hyphens, and forward slashes. */
getKey(): string;
/** Gets the namespace this resource is a part of
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, and hyphens. */
getNamespace(): string;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Object as java_lang_Object } from 'java.lang';
import { NamespacedTag as com_destroystokyo_paper_NamespacedTag, Namespaced as com_destroystokyo_paper_Namespaced } from 'com.destroystokyo.paper';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';
/** Represents a String based key pertaining to a tagged entry. Consists of two components - a namespace
 and a key.
 
 Namespaces may only contain lowercase alphanumeric characters, periods,
 underscores, and hyphens.
 
 Keys may only contain lowercase alphanumeric characters, periods,
 underscores, hyphens, and forward slashes. */

  export class NamespacedTag extends java_lang_Object implements com_destroystokyo_paper_Namespaced {
static MINECRAFT: string;
static BUKKIT: string;
static VALID_NAMESPACE: java_util_regex_Pattern;
static VALID_KEY: java_util_regex_Pattern;
namespace: string;
key: string;
key: string;
namespace: string;
equals(obj: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
/** Description copied from interface: NamespacedGets the key corresponding to this resource
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, hyphens, and forward slashes. */
getKey(): string;
/** Description copied from interface: NamespacedGets the namespace this resource is a part of
 
 This is contractually obligated to only contain lowercase alphanumeric characters,
 periods, underscores, and hyphens. */
getNamespace(): string;
/** Get a key in the Minecraft namespace. */
static minecraft(key: string): com_destroystokyo_paper_NamespacedTag;
/** Return a new random key in the BUKKIT namespace. */
static randomKey(): com_destroystokyo_paper_NamespacedTag;
/** Create a key in a specific namespace. */
constructor(namespace: string, key: string);
/** Create a key in the plugin's namespace.
 
 Namespaces may only contain lowercase alphanumeric characters, periods,
 underscores, and hyphens.
 
 Keys may only contain lowercase alphanumeric characters, periods,
 underscores, hyphens, and forward slashes. */
constructor(plugin: org_bukkit_plugin_Plugin, key: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
/** Represents a client connected to the server. */

  export class NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress | null;
/** Returns the socket address of the client. */
getAddress(): java_net_InetSocketAddress;
/** Returns the protocol version of the client. */
getProtocolVersion(): number;
/** Returns the virtual host the client is connected to.

 The virtual host refers to the hostname/port the client used to
 connect to the server. */
getVirtualHost(): java_net_InetSocketAddress | null;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { PluginDescriptionFile as org_bukkit_plugin_PluginDescriptionFile } from 'org.bukkit.plugin';
import { Logger as java_util_logging_Logger } from 'java.util.logging';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Prevents plugins (e.g. Essentials) from changing the parent of the plugin logger. */

  export class PaperPluginLogger extends java_util_logging_Logger {
static logger: java_util_logging_Logger;
class: java_lang_Class<java_lang_Object>;
static getLogger(description: org_bukkit_plugin_PluginDescriptionFile): java_util_logging_Logger;
setParent(parent: java_util_logging_Logger): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { Iterator as java_util_Iterator, List as java_util_List, Spliterator as java_util_Spliterator } from 'java.util';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { CachedServerIcon as org_bukkit_util_CachedServerIcon } from 'org.bukkit.util';
import { StatusClient as com_destroystokyo_paper_network_StatusClient } from 'com.destroystokyo.paper.network';
import { PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { ServerListPingEvent as org_bukkit_event_server_ServerListPingEvent } from 'org.bukkit.event.server';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Extended version of ServerListPingEvent that allows full control
 of the response sent to the client. */

  export class PaperServerListPingEvent extends org_bukkit_event_server_ServerListPingEvent implements org_bukkit_event_Cancellable {
client: com_destroystokyo_paper_network_StatusClient;
numPlayers: number;
hidePlayers: boolean;
playerSample: java_util_List<com_destroystokyo_paper_profile_PlayerProfile>;
version: string;
protocolVersion: number;
favicon: org_bukkit_util_CachedServerIcon;
cancelled: boolean;
originalPlayerCount: boolean;
players: java_lang_Object[];
version: string;
numPlayers: number;
client: com_destroystokyo_paper_network_StatusClient;
playerSample: java_util_List<com_destroystokyo_paper_profile_PlayerProfile>;
protocolVersion: number;
maxPlayers: number;
serverIcon: org_bukkit_util_CachedServerIcon | null;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** Returns the version that will be sent as server version on the client. */
getVersion(): string;
/** Gets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins

 Cancelling this event will cause the connection to be closed immediately,
 without sending a response to the client. */
isCancelled(): boolean;
/** 
 
 Calling the Iterator.remove() method will force that particular
 player to not be displayed on the player list, decrease the size
 returned by ServerListPingEvent.getNumPlayers(), and will not be returned again by
 any new iterator.

 Note: For compatibility reasons, this method will return all
 online players, not just the ones referenced in getPlayerSample().
 Removing a player will:

 
     Decrement the online player count (if and only if) the player
     count wasn't changed by another plugin before.
     Remove all entries from getPlayerSample() that refer to
     the removed player (based on their UUID).
  */
iterator(): java_util_Iterator<org_bukkit_entity_Player>;
/** Sets the server icon sent to the client. */
setServerIcon(icon: org_bukkit_util_CachedServerIcon | null): void | null;
/** Get the number of players sent.

 Returns -1 if players are hidden using
 shouldHidePlayers(). */
getNumPlayers(): number;
/** Returns the StatusClient pinging the server. */
getClient(): com_destroystokyo_paper_network_StatusClient;
/** Sets the number of players displayed in the server list.

 Note that this won't have any effect if shouldHidePlayers()
 is enabled. */
setNumPlayers(numPlayers: number): void;
/** Returns whether all player related information is hidden in the server
 list. This will cause getNumPlayers(), getMaxPlayers()
 and getPlayerSample() to be skipped in the response.

 The Vanilla Minecraft client will display the player count as ???
 when this option is enabled. */
shouldHidePlayers(): boolean;
/** Sets whether all player related information is hidden in the server
 list. This will cause getNumPlayers(), getMaxPlayers()
 and getPlayerSample() to be skipped in the response.

 The Vanilla Minecraft client will display the player count as ???
 when this option is enabled. */
setHidePlayers(hidePlayers: boolean): void;
/** Returns a mutable list of PlayerProfile that will be displayed
 as online players on the client.

 The Vanilla Minecraft client will display them when hovering the
 player count with the mouse. */
getPlayerSample(): java_util_List<com_destroystokyo_paper_profile_PlayerProfile>;
/** Sets the protocol version that will be sent as the protocol version
 of the server to the client. */
setProtocolVersion(protocolVersion: number): void;
/** Returns the protocol version that will be sent as the protocol version
 of the server to the client. */
getProtocolVersion(): number;
/** Get the maximum number of players sent.

 Returns -1 if players are hidden using
 shouldHidePlayers(). */
getMaxPlayers(): number;
/** Gets the server icon sent to the client. */
getServerIcon(): org_bukkit_util_CachedServerIcon | null;
/** Sets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins.

 Cancelling this event will cause the connection to be closed immediately,
 without sending a response to the client. */
setCancelled(cancel: boolean): void;
/** Sets the version that will be sent as server version to the client. */
setVersion(version: string): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
spliterator(): java_util_Spliterator<T>;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
constructor(client: com_destroystokyo_paper_network_StatusClient, motd: string, numPlayers: number, maxPlayers: number, version: string, protocolVersion: number, favicon: org_bukkit_util_CachedServerIcon | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
import { NetworkClient as com_destroystokyo_paper_network_NetworkClient } from 'com.destroystokyo.paper.network';
/** Represents a client requesting the current status from the server (e.g. from
 the server list). */

  export class StatusClient implements com_destroystokyo_paper_network_NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress | null;
/** Returns whether the client is using an older version that doesn't
 support all of the features in PaperServerListPingEvent.

 For Vanilla, this returns true for all clients older than 1.7. */
isLegacy(): boolean;
/** Returns the socket address of the client. */
getAddress(): java_net_InetSocketAddress;
/** Returns the protocol version of the client. */
getProtocolVersion(): number;
/** Returns the virtual host the client is connected to.

 The virtual host refers to the hostname/port the client used to
 connect to the server. */
getVirtualHost(): java_net_InetSocketAddress | null;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { ParticleBuilder as com_destroystokyo_paper_ParticleBuilder } from 'com.destroystokyo.paper';
import { Object as java_lang_Object } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Location as org_bukkit_Location, World as org_bukkit_World, Particle as org_bukkit_Particle, Color as org_bukkit_Color } from 'org.bukkit';
import { List as java_util_List, Collection as java_util_Collection } from 'java.util';
/** Helps prepare a particle to be sent to players.

 Usage of the builder is preferred over the super long World.spawnParticle(Particle, Location, int, double, double, double, double, Object) API */

  export class ParticleBuilder extends java_lang_Object {
particle: org_bukkit_Particle;
receivers: java_util_List<org_bukkit_entity_Player>;
source: org_bukkit_entity_Player;
location: org_bukkit_Location;
count: number;
offsetX: number;
offsetY: number;
offsetZ: number;
extra: number;
data: java_lang_Object;
force: boolean;
/** Sets whether the particle is forcefully shown to the player. If forced, the particle will show
 faraway, as far as the player's view distance allows. If false, the particle will show
 according to the client's particle settings. */
force(force: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle offset. Varies by particle on how this is used */
offset(offsetX: number, offsetY: number, offsetZ: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the number of particles to spawn */
count(count: number): com_destroystokyo_paper_ParticleBuilder;
count(): number;
/** Gets the particle custom data. Varies by particle on how this is used */
data<T extends java_lang_Object>(): T | null;
/** Sets the particle custom data. Varies by particle on how this is used */
data<T extends java_lang_Object>(data: T | null): com_destroystokyo_paper_ParticleBuilder | null;
source(): org_bukkit_entity_Player | null;
/** Sets the source of this particle for visibility concerns (Vanish API) */
source(source: org_bukkit_entity_Player | null): com_destroystokyo_paper_ParticleBuilder | null;
location(): org_bukkit_Location | null;
/** Sets the location of where to spawn the particle */
location(world: org_bukkit_World, x: number, y: number, z: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the location of where to spawn the particle */
location(location: org_bukkit_Location): com_destroystokyo_paper_ParticleBuilder;
/** Gets the Particle extra data. Varies by particle on how this is used */
extra(): number;
/** Sets the particle extra data. Varies by particle on how this is used */
extra(extra: number): com_destroystokyo_paper_ParticleBuilder;
/** Sends this particle to all players in the world. This is rather silly and you should likely not
 be doing this.

 Just be a logical person and use receivers by radius or collection. */
allPlayers(): com_destroystokyo_paper_ParticleBuilder;
/** Example use:

 builder.receivers(16); if (builder.hasReceivers()) { sendParticleAsync(builder); } */
hasReceivers(): boolean;
/** Sends the particle to all receiving players (or all). This method is safe to use
 Asynchronously */
spawn(): com_destroystokyo_paper_ParticleBuilder;
receivers(): java_util_List<org_bukkit_entity_Player> | null;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. Allows specifying a different Y size than X and Z If you want a more
 cylinder check, see receivers(int, int, boolean) If you want a more spherical check,
 see receivers(int, boolean) */
receivers(xzRadius: number, yRadius: number): com_destroystokyo_paper_ParticleBuilder;
receivers(receivers: java_util_List<org_bukkit_entity_Player> | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. If you want a more spherical check, see receivers(int,
 boolean) */
receivers(radius: number): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within the specified radius around the particle location. If byDistance is
 false, behavior uses cuboid selection the same as receivers(int, int) If byDistance is
 true, radius is tested by distance on the y plane and on the x/z plane, in a cylinder shape. */
receivers(xzRadius: number, yRadius: number, byDistance: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within the specified radius around the particle location. If byDistance is
 false, behavior uses cuboid selection the same as receivers(int, int) If byDistance is
 true, radius is tested by distance in a spherical shape */
receivers(radius: number, byDistance: boolean): com_destroystokyo_paper_ParticleBuilder;
/** Selects all players within a cuboid selection around the particle location, within the
 specified bounding box. If you want a more cylinder check, see receivers(int, int,
 boolean) If you want a more spherical check, see receivers(int, boolean) */
receivers(xRadius: number, yRadius: number, zRadius: number): com_destroystokyo_paper_ParticleBuilder;
receivers(...receivers: org_bukkit_entity_Player[] | null): com_destroystokyo_paper_ParticleBuilder | null;
receivers(receivers: java_util_Collection<org_bukkit_entity_Player> | null): com_destroystokyo_paper_ParticleBuilder | null;
/** Changes what particle will be sent */
particle(particle: org_bukkit_Particle): com_destroystokyo_paper_ParticleBuilder;
particle(): org_bukkit_Particle;
/** Particle offset X. Varies by particle on how this is used */
offsetX(): number;
/** Particle offset Y. Varies by particle on how this is used */
offsetY(): number;
/** Particle offset Z. Varies by particle on how this is used */
offsetZ(): number;
/** Sets the particle Color and size. Only valid for REDSTONE. */
color(color: org_bukkit_Color | null, size: number): com_destroystokyo_paper_ParticleBuilder | null;
/** Sets the particle Color.
 Only valid for REDSTONE. */
color(r: number, g: number, b: number): com_destroystokyo_paper_ParticleBuilder;
/** Sets the particle Color. Only valid for REDSTONE. */
color(color: org_bukkit_Color | null): com_destroystokyo_paper_ParticleBuilder | null;
constructor(particle: org_bukkit_Particle);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { PathResult as com_destroystokyo_paper_entity_Pathfinder_PathResult } from 'com.destroystokyo.paper.entity.Pathfinder';
import { LivingEntity as org_bukkit_entity_LivingEntity, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
/** Handles pathfinding operations for an Entity */

  export class Pathfinder {
entity: org_bukkit_entity_Mob;
currentPath: com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** If the entity is currently trying to navigate to a destination, this will return true */
hasPath(): boolean;
/** Calculates a destination for the Entity to navigate to, but does not set it
 as the current target. Useful for calculating what would happen before setting it. */
findPath(loc: org_bukkit_Location): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 but does not set it as the current target.
 Useful for calculating what would happen before setting it.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
findPath(target: org_bukkit_entity_LivingEntity): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Calculates a destination for the Entity to navigate to, with desired speed
 as the current target. */
moveTo(loc: org_bukkit_Location, speed: number): boolean;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 and sets it with default speed.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
moveTo(target: org_bukkit_entity_LivingEntity): boolean;
/** Calculates a destination for the Entity to navigate to to reach the target entity,
 and sets it with specified speed.

 The behavior of this PathResult is subject to the games pathfinding rules, and may
 result in the pathfinding automatically updating to follow the target Entity.

 However, this behavior is not guaranteed, and is subject to the games behavior. */
moveTo(target: org_bukkit_entity_LivingEntity, speed: number): boolean;
/** Takes the result of a previous pathfinding calculation and sets it
 as the active pathfinding with default speed. */
moveTo(path: com_destroystokyo_paper_entity_Pathfinder_PathResult): boolean;
/** Takes the result of a previous pathfinding calculation and sets it
 as the active pathfinding, */
moveTo(path: com_destroystokyo_paper_entity_Pathfinder_PathResult, speed: number): boolean;
/** Calculates a destination for the Entity to navigate to, and sets it with default speed
 as the current target. */
moveTo(loc: org_bukkit_Location): boolean;
getEntity(): org_bukkit_entity_Mob;
getCurrentPath(): com_destroystokyo_paper_entity_Pathfinder_PathResult | null;
/** Instructs the Entity to stop trying to navigate to its current desired location */
stopPathfinding(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.Pathfinder' {
import { List as java_util_List } from 'java.util';
import { Location as org_bukkit_Location } from 'org.bukkit';
/** Represents the result of a pathfinding calculation */

  export class PathResult {
points: java_util_List<org_bukkit_Location>;
nextPointIndex: number;
nextPoint: org_bukkit_Location | null;
finalPoint: org_bukkit_Location | null;
/** All currently calculated points to follow along the path to reach the destination location

 Will return points the entity has already moved past, see getNextPointIndex() */
getPoints(): java_util_List<org_bukkit_Location>;
getNextPointIndex(): number;
getNextPoint(): org_bukkit_Location | null;
getFinalPoint(): org_bukkit_Location | null;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { PreCreatureSpawnEvent as com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent } from 'com.destroystokyo.paper.event.entity';
/** Called when a phantom is spawned for an exhausted player */

  export class PhantomPreSpawnEvent extends com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent {
entity: org_bukkit_entity_Entity;
spawningEntity: org_bukkit_entity_Entity | null;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** Get the entity this phantom is spawning for */
getSpawningEntity(): org_bukkit_entity_Entity | null;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(location: org_bukkit_Location, entity: org_bukkit_entity_Entity, reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** WARNING: This event only fires for a limited number of cases, and not for every case that CreatureSpawnEvent does.

 You should still listen to CreatureSpawnEvent as a backup, and only use this event as an "enhancement".
 The intent of this event is to improve server performance, so limited use cases.
 
 Currently: NATURAL and SPAWNER based reasons. Please submit a Pull Request for future additions.
 Also, Plugins that replace Entity Registrations with their own custom entities might not fire this event. */

  export class PreCreatureSpawnEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
location: org_bukkit_Location;
type: org_bukkit_entity_EntityType;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
shouldAbortSpawn: boolean;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
type: org_bukkit_entity_EntityType;
static handlerList: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getType(): org_bukkit_entity_EntityType;
/** Set this if you are more blanket blocking all types of these spawns, and wish to abort the spawn process from
 trying more attempts after this cancellation. */
setShouldAbortSpawn(shouldAbortSpawn: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getSpawnLocation(): org_bukkit_Location;
/** Cancelling this event is more effecient than cancelling CreatureSpawnEvent */
setCancelled(cancel: boolean): void;
shouldAbortSpawn(): boolean;
getReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(location: org_bukkit_Location, type: org_bukkit_entity_EntityType, reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Advancement as org_bukkit_advancement_Advancement } from 'org.bukkit.advancement';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when a player is granted a criteria in an advancement. */

  export class PlayerAdvancementCriterionGrantEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
advancement: org_bukkit_advancement_Advancement;
criterion: string;
cancel: boolean;
handlers: org_bukkit_event_HandlerList;
criterion: string;
static handlerList: org_bukkit_event_HandlerList;
advancement: org_bukkit_advancement_Advancement;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Get the criterion which has been granted. */
getCriterion(): string;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Get the advancement which has been affected. */
getAdvancement(): org_bukkit_advancement_Advancement;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(who: org_bukkit_entity_Player, advancement: org_bukkit_advancement_Advancement, criterion: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when the player themselves change their armor items
 
 Not currently called for environmental factors though it MAY BE IN THE FUTURE */

  export class PlayerArmorChangeEvent extends org_bukkit_event_player_PlayerEvent {
static HANDLERS: org_bukkit_event_HandlerList;
slotType: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
oldItem: org_bukkit_inventory_ItemStack;
newItem: org_bukkit_inventory_ItemStack;
handlers: org_bukkit_event_HandlerList;
oldItem: org_bukkit_inventory_ItemStack | null;
newItem: org_bukkit_inventory_ItemStack | null;
static handlerList: org_bukkit_event_HandlerList;
slotType: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
toString(): string;
/** Gets the existing item that's being replaced */
getOldItem(): org_bukkit_inventory_ItemStack | null;
/** Gets the new item that's replacing the old */
getNewItem(): org_bukkit_inventory_ItemStack | null;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Gets the type of slot being altered. */
getSlotType(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, slotType: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType, oldItem: org_bukkit_inventory_ItemStack | null, newItem: org_bukkit_inventory_ItemStack | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent' {
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Set as java_util_Set } from 'java.util';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class SlotType extends java_lang_Enum<com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType> {
static HEAD: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static CHEST: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static LEGS: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static FEET: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
mutableTypes: java_util_Set<org_bukkit_Material>;
immutableTypes: java_util_Set<org_bukkit_Material>;
static $VALUES: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
types: java_util_Set<org_bukkit_Material>;
static byMaterial: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType | null;
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (PlayerArmorChangeEvent.SlotType c : PlayerArmorChangeEvent.SlotType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
/** Gets an immutable set of all allowed material types that can be placed in an
 armor slot. */
getTypes(): java_util_Set<org_bukkit_Material>;
/** Gets the type of slot via the specified material */
static getByMaterial(material: org_bukkit_Material): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType | null;
/** Gets whether or not this material can be equipped to a slot */
static isEquipable(material: org_bukkit_Material): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent' {
import { SlotType as com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType } from 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent';
import { Set as java_util_Set } from 'java.util';
import { Material as org_bukkit_Material } from 'org.bukkit';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class SlotType extends java_lang_Enum<com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType> {
static HEAD: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static CHEST: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static LEGS: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
static FEET: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
mutableTypes: java_util_Set<org_bukkit_Material>;
immutableTypes: java_util_Set<org_bukkit_Material>;
static $VALUES: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
types: java_util_Set<org_bukkit_Material>;
static byMaterial: com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType | null;
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (PlayerArmorChangeEvent.SlotType c : PlayerArmorChangeEvent.SlotType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType;
/** Gets an immutable set of all allowed material types that can be placed in an
 armor slot. */
getTypes(): java_util_Set<org_bukkit_Material>;
/** Gets the type of slot via the specified material */
static getByMaterial(material: org_bukkit_Material): com_destroystokyo_paper_event_player_PlayerArmorChangeEvent_SlotType | null;
/** Gets whether or not this material can be equipped to a slot */
static isEquipable(material: org_bukkit_Material): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when processing a player's attack on an entity when the player's attack strength cooldown is reset */

  export class PlayerAttackEntityCooldownResetEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
cooledAttackStrength: number;
cancel: boolean;
static handlers: org_bukkit_event_HandlerList;
attackedEntity: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList;
attackedEntity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
cooledAttackStrength: number;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Gets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If an attack cooldown event is cancelled, the players attack strength will remain at the same value instead of being reset. */
isCancelled(): boolean;
/** Returns the entity attacked by the player */
getAttackedEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Cancelling this event will prevent the target player from having their cooldown reset from attacking this entity */
setCancelled(cancel: boolean): void;
/** Get the value of the players cooldown attack strength when they initiated the attack */
getCooledAttackStrength(): number;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(who: org_bukkit_entity_Player, attackedEntity: org_bukkit_entity_Entity, cooledAttackStrength: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { MainHand as org_bukkit_inventory_MainHand } from 'org.bukkit.inventory';
import { ChatVisibility as com_destroystokyo_paper_ClientOption_ChatVisibility } from 'com.destroystokyo.paper.ClientOption';
import { SkinParts as com_destroystokyo_paper_SkinParts } from 'com.destroystokyo.paper';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when the player changes his client settings */

  export class PlayerClientOptionsChangeEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
locale: string;
viewDistance: number;
chatVisibility: com_destroystokyo_paper_ClientOption_ChatVisibility;
chatColors: boolean;
skinparts: com_destroystokyo_paper_SkinParts;
mainHand: org_bukkit_inventory_MainHand;
handlers: org_bukkit_event_HandlerList;
locale: string;
static handlerList: org_bukkit_event_HandlerList;
viewDistance: number;
mainHand: org_bukkit_inventory_MainHand;
chatVisibility: com_destroystokyo_paper_ClientOption_ChatVisibility;
skinParts: com_destroystokyo_paper_SkinParts;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getLocale(): string;
hasViewDistanceChanged(): boolean;
hasLocaleChanged(): boolean;
hasChatVisibilityChanged(): boolean;
hasChatColorsEnabledChanged(): boolean;
hasSkinPartsChanged(): boolean;
hasMainHandChanged(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
getViewDistance(): number;
getMainHand(): org_bukkit_inventory_MainHand;
getChatVisibility(): com_destroystokyo_paper_ClientOption_ChatVisibility;
getSkinParts(): com_destroystokyo_paper_SkinParts;
hasChatColorsEnabled(): boolean;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, locale: string, viewDistance: number, chatVisibility: com_destroystokyo_paper_ClientOption_ChatVisibility, chatColors: boolean, skinParts: com_destroystokyo_paper_SkinParts, mainHand: org_bukkit_inventory_MainHand);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { InetAddress as java_net_InetAddress } from 'java.net';
import { UUID as java_util_UUID } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** 
 This event is invoked when a player has disconnected. It is guaranteed that,
 if the server is in online-mode, that the provided uuid and username have been
 validated.
 

 
 The event is invoked for players who have not yet logged into the world, whereas
 PlayerQuitEvent is only invoked on players who have logged into the world.
 

 
 The event is invoked for players who have already logged into the world,
 although whether or not the player exists in the world at the time of
 firing is undefined. (That is, whether the plugin can retrieve a Player object
 using the event parameters is undefined). However, it is guaranteed that this
 event is invoked AFTER PlayerQuitEvent, if the player has already logged into the world.
 

 
 This event is guaranteed to never fire unless AsyncPlayerPreLoginEvent has
 been fired beforehand, and this event may not be called in parallel with
 AsyncPlayerPreLoginEvent for the same connection.
 

 
 Cancelling the AsyncPlayerPreLoginEvent guarantees the corresponding
 PlayerConnectionCloseEvent is never called.
 

 
 The event may be invoked asynchronously or synchronously. Plugins should check
 Event.isAsynchronous() and handle accordingly.
  */

  export class PlayerConnectionCloseEvent extends org_bukkit_event_Event {
static HANDLERS: org_bukkit_event_HandlerList;
playerUniqueId: java_util_UUID;
playerName: string;
ipAddress: java_net_InetAddress;
handlers: org_bukkit_event_HandlerList;
ipAddress: java_net_InetAddress;
playerName: string;
static handlerList: org_bukkit_event_HandlerList;
playerUniqueId: java_util_UUID;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Returns the player's IP address. */
getIpAddress(): java_net_InetAddress;
/** Returns the name of the player disconnecting. */
getPlayerName(): string;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Returns the UUID of the player disconnecting. */
getPlayerUniqueId(): java_util_UUID;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(playerUniqueId: java_util_UUID, playerName: string, ipAddress: java_net_InetAddress, async: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Firework as org_bukkit_entity_Firework, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Fired when a player boosts elytra flight with a firework */

  export class PlayerElytraBoostEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
itemStack: org_bukkit_inventory_ItemStack;
firework: org_bukkit_entity_Firework;
consume: boolean;
handlers: org_bukkit_event_HandlerList;
firework: org_bukkit_entity_Firework;
static handlerList: org_bukkit_event_HandlerList;
itemStack: org_bukkit_inventory_ItemStack;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Get the firework entity that was spawned */
getFirework(): org_bukkit_entity_Firework;
/** Set whether to consume the firework or not */
setShouldConsume(consume: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Get the firework itemstack used */
getItemStack(): org_bukkit_inventory_ItemStack;
/** Get whether to consume the firework or not */
shouldConsume(): boolean;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, itemStack: org_bukkit_inventory_ItemStack, firework: org_bukkit_entity_Firework);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { UUID as java_util_UUID } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** This event is fired during a player handshake.

 If there are no listeners listening to this event, the logic default
 to your server platform will be ran.

 WARNING: TAMPERING WITH THIS EVENT CAN BE DANGEROUS */

  export class PlayerHandshakeEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
static HANDLERS: org_bukkit_event_HandlerList;
originalHandshake: string;
cancelled: boolean;
serverHostname: string;
socketAddressHostname: string;
uniqueId: java_util_UUID;
propertiesJson: string;
failed: boolean;
failMessage: string;
handlers: org_bukkit_event_HandlerList;
originalHandshake: string;
serverHostname: string | null;
socketAddressHostname: string | null;
propertiesJson: string | null;
failMessage: string;
static handlerList: org_bukkit_event_HandlerList;
uniqueId: java_util_UUID | null;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Determines if this event is cancelled.

 When this event is cancelled, custom handshake logic will not
 be processed. */
isCancelled(): boolean;
/** Gets the original handshake string. */
getOriginalHandshake(): string;
/** Gets the server hostname string.

 This should not include the port. */
getServerHostname(): string | null;
/** Sets the server hostname string.

 This should not include the port. */
setServerHostname(serverHostname: string): void;
/** Sets the unique id. */
setUniqueId(uniqueId: java_util_UUID): void;
/** Gets the socket address hostname string.

 This should not include the port. */
getSocketAddressHostname(): string | null;
/** Sets the socket address hostname string.

 This should not include the port. */
setSocketAddressHostname(socketAddressHostname: string): void;
/** Gets the profile properties.

 This should be a valid JSON string. */
getPropertiesJson(): string | null;
/** Determines if authentication failed.

 When true, the client connecting will be disconnected
 with the fail message. */
isFailed(): boolean;
/** Sets if authentication failed and the client should be disconnected.

 When true, the client connecting will be disconnected
 with the fail message. */
setFailed(failed: boolean): void;
/** Sets the profile properties.

 This should be a valid JSON string. */
setPropertiesJson(propertiesJson: string): void;
/** Gets the message to display to the client when authentication fails. */
getFailMessage(): string;
/** Sets the message to display to the client when authentication fails. */
setFailMessage(failMessage: string): void;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Sets if this event is cancelled.

 When this event is cancelled, custom handshake logic will not
 be processed. */
setCancelled(cancelled: boolean): void;
/** Gets the unique id. */
getUniqueId(): java_util_UUID | null;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
/** Creates a new PlayerHandshakeEvent. */
constructor(originalHandshake: string, cancelled: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { PlayerSpawnLocationEvent as org_spigotmc_event_player_PlayerSpawnLocationEvent } from 'org.spigotmc.event.player';

  export class PlayerInitialSpawnEvent extends org_spigotmc_event_player_PlayerSpawnLocationEvent {
player: org_bukkit_entity_Player;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** Returns the player involved in this event */
getPlayer(): org_bukkit_entity_Player;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(who: org_bukkit_entity_Player, spawnLocation: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when the server detects the player is jumping.
 
 Added to avoid the overhead and special case logic that many plugins use
 when checking for jumps via PlayerMoveEvent, this event is fired whenever
 the server detects that the player is jumping. */

  export class PlayerJumpEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancel: boolean;
from: org_bukkit_Location;
to: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
from: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
to: org_bukkit_Location;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Gets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If a jump event is cancelled, the player will be moved or
 teleported back to the Location as defined by getFrom(). This will not
 fire an event */
isCancelled(): boolean;
/** Gets the location this player jumped from */
getFrom(): org_bukkit_Location;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Sets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If a jump event is cancelled, the player will be moved or
 teleported back to the Location as defined by getFrom(). This will not
 fire an event */
setCancelled(cancel: boolean): void;
/** Gets the location this player jumped to

 This information is based on what the client sends, it typically
 has little relation to the arc of the jump at any given point. */
getTo(): org_bukkit_Location;
/** Sets the location to mark as where the player jumped from */
setFrom(from: org_bukkit_Location): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, from: org_bukkit_Location, to: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Projectile as org_bukkit_entity_Projectile, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when a player shoots a projectile */

  export class PlayerLaunchProjectileEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
projectile: org_bukkit_entity_Projectile;
itemStack: org_bukkit_inventory_ItemStack;
consumeItem: boolean;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
itemStack: org_bukkit_inventory_ItemStack;
projectile: org_bukkit_entity_Projectile;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Set whether to consume the ItemStack or not */
setShouldConsume(consumeItem: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Get the ItemStack used to fire the projectile */
getItemStack(): org_bukkit_inventory_ItemStack;
/** Get whether to consume the ItemStack or not */
shouldConsume(): boolean;
/** Gets the projectile which will be launched by this event */
getProjectile(): org_bukkit_entity_Projectile;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(shooter: org_bukkit_entity_Player, itemStack: org_bukkit_inventory_ItemStack, projectile: org_bukkit_entity_Projectile);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when the locale of the player is changed. */

  export class PlayerLocaleChangeEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
oldLocale: string;
newLocale: string;
handlers: org_bukkit_event_HandlerList;
oldLocale: string;
newLocale: string;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Gets the locale the player switched from. */
getOldLocale(): string;
/** Gets the locale the player is changed to. */
getNewLocale(): string;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, oldLocale: string, newLocale: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Fired when the server is calculating what chunks to try to spawn monsters in every Monster Spawn Tick event */

  export class PlayerNaturallySpawnCreaturesEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
radius: number;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
spawnRadius: number;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
getSpawnRadius(): number;
setSpawnRadius(radius: number): void;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, radius: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ExperienceOrb as org_bukkit_entity_ExperienceOrb, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Fired when a player is attempting to pick up an experience orb */

  export class PlayerPickupExperienceEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
experienceOrb: org_bukkit_entity_ExperienceOrb;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
experienceOrb: org_bukkit_entity_ExperienceOrb;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getExperienceOrb(): org_bukkit_entity_ExperienceOrb;
static getHandlerList(): org_bukkit_event_HandlerList;
/** If true, Cancels picking up the experience orb, leaving it in the world */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, experienceOrb: org_bukkit_entity_ExperienceOrb);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Fired after a player has respawned */

  export class PlayerPostRespawnEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
respawnedLocation: org_bukkit_Location;
isBedSpawn: boolean;
handlers: org_bukkit_event_HandlerList;
respawnedLocation: org_bukkit_Location;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Returns the location of the respawned player */
getRespawnedLocation(): org_bukkit_Location;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Checks if the player respawned to their bed */
isBedSpawn(): boolean;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(respawnPlayer: org_bukkit_entity_Player, respawnedLocation: org_bukkit_Location, isBedSpawn: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Set as java_util_Set, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';
/** Represents a players profile for the game, such as UUID, Name, and textures. */

  export class PlayerProfile {
name: string | null;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
id: java_util_UUID | null;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 This will also complete textures. If you do not want to load textures, use {complete(boolean)} */
complete(): boolean;
/** If this profile is not complete, then make the API call to complete it.
 This is a blocking operation and should be done asynchronously.

 Optionally will also fill textures. */
complete(textures: boolean): boolean;
getName(): string | null;
getProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
/** Sets multiple properties. If any of the set properties already exist, it will be replaced */
setProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
/** Sets a property. If the property already exists, the previous one will be replaced */
setProperty(property: com_destroystokyo_paper_profile_ProfileProperty): void;
/** Sets this profiles Name */
setName(name: string | null): string | null;
getId(): java_util_UUID | null;
isComplete(): boolean;
/** Sets this profiles UUID */
setId(uuid: java_util_UUID | null): java_util_UUID | null;
/** Check if the Profile has the specified property */
hasProperty(property: string | null): boolean | null;
/** Removes a specific property from this profile */
removeProperty(property: string | null): boolean | null;
/** Removes a specific property from this profile */
removeProperty(property: com_destroystokyo_paper_profile_ProfileProperty): boolean;
/** Removes all properties in the collection */
removeProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): boolean;
/** Clears all properties on this profile */
clearProperties(): void;
/** Like complete(boolean) but will try only from cache, and not make network calls
 Does not account for textures. */
completeFromCache(): boolean;
/** Whether or not this Profile has textures associated to it */
hasTextures(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Called when a player is firing a bow and the server is choosing an arrow to use. */

  export class PlayerReadyArrowEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
bow: org_bukkit_inventory_ItemStack;
arrow: org_bukkit_inventory_ItemStack;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
bow: org_bukkit_inventory_ItemStack;
static handlerList: org_bukkit_event_HandlerList;
arrow: org_bukkit_inventory_ItemStack;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Whether or not use of this arrow is cancelled. On cancel, the server will try the next arrow available and fire another event. */
isCancelled(): boolean;
getBow(): org_bukkit_inventory_ItemStack;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Cancel use of this arrow. On cancel, the server will try the next arrow available and fire another event. */
setCancelled(cancel: boolean): void;
getArrow(): org_bukkit_inventory_ItemStack;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, bow: org_bukkit_inventory_ItemStack, arrow: org_bukkit_inventory_ItemStack);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Triggered when a player starts spectating an entity in spectator mode. */

  export class PlayerStartSpectatingEntityEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
currentSpectatorTarget: org_bukkit_entity_Entity;
newSpectatorTarget: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList;
currentSpectatorTarget: org_bukkit_entity_Entity;
newSpectatorTarget: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Gets the entity that the player is currently spectating or themselves if they weren't spectating anything */
getCurrentSpectatorTarget(): org_bukkit_entity_Entity;
/** Gets the new entity that the player will now be spectating */
getNewSpectatorTarget(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, currentSpectatorTarget: org_bukkit_entity_Entity, newSpectatorTarget: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';
/** Triggered when a player stops spectating an entity in spectator mode. */

  export class PlayerStopSpectatingEntityEvent extends org_bukkit_event_player_PlayerEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
spectatorTarget: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
spectatorTarget: org_bukkit_entity_Entity;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Gets the entity that the player is spectating */
getSpectatorTarget(): org_bukkit_entity_Entity;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, spectatorTarget: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { EndGateway as org_bukkit_block_EndGateway } from 'org.bukkit.block';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PlayerTeleportEvent as org_bukkit_event_player_PlayerTeleportEvent } from 'org.bukkit.event.player';
/** Fired when a teleport is triggered for an End Gateway */

  export class PlayerTeleportEndGatewayEvent extends org_bukkit_event_player_PlayerTeleportEvent {
gateway: org_bukkit_block_EndGateway;
gateway: org_bukkit_block_EndGateway;
from: org_bukkit_Location;
to: org_bukkit_Location;
player: org_bukkit_entity_Player;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** The gateway triggering the teleport */
getGateway(): org_bukkit_block_EndGateway;
/** Gets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If a move or teleport event is cancelled, the player will be moved or
 teleported back to the Location as defined by getFrom(). This will not
 fire an event */
isCancelled(): boolean;
/** Gets the location this player moved from */
getFrom(): org_bukkit_Location;
/** Sets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins
 
 If a move or teleport event is cancelled, the player will be moved or
 teleported back to the Location as defined by getFrom(). This will not
 fire an event */
setCancelled(cancel: boolean): void;
/** Gets the location this player moved to */
getTo(): org_bukkit_Location;
/** Sets the location to mark as where the player moved from */
setFrom(from: org_bukkit_Location): void;
/** Sets the location that this player will move to */
setTo(to: org_bukkit_Location): void;
/** Returns the player involved in this event */
getPlayer(): org_bukkit_entity_Player;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(player: org_bukkit_entity_Player, from: org_bukkit_Location, to: org_bukkit_Location, gateway: org_bukkit_block_EndGateway);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.player' {
import { HandlerList as org_bukkit_event_HandlerList } from 'org.bukkit.event';
import { EquipmentSlot as org_bukkit_inventory_EquipmentSlot } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PlayerEvent as org_bukkit_event_player_PlayerEvent } from 'org.bukkit.event.player';

  export class PlayerUseUnknownEntityEvent extends org_bukkit_event_player_PlayerEvent {
static handlers: org_bukkit_event_HandlerList;
entityId: number;
attack: boolean;
hand: org_bukkit_inventory_EquipmentSlot;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
entityId: number;
hand: org_bukkit_inventory_EquipmentSlot;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
isAttack(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
getEntityId(): number;
getHand(): org_bukkit_inventory_EquipmentSlot;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(who: org_bukkit_entity_Player, entityId: number, attack: boolean, hand: org_bukkit_inventory_EquipmentSlot);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** WARNING: This event only fires for a limited number of cases, and not for every case that CreatureSpawnEvent does.

 You should still listen to CreatureSpawnEvent as a backup, and only use this event as an "enhancement".
 The intent of this event is to improve server performance, so limited use cases.
 
 Currently: NATURAL and SPAWNER based reasons. Please submit a Pull Request for future additions.
 Also, Plugins that replace Entity Registrations with their own custom entities might not fire this event. */

  export class PreCreatureSpawnEvent extends org_bukkit_event_Event implements org_bukkit_event_Cancellable {
location: org_bukkit_Location;
type: org_bukkit_entity_EntityType;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
shouldAbortSpawn: boolean;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
type: org_bukkit_entity_EntityType;
static handlerList: org_bukkit_event_HandlerList;
spawnLocation: org_bukkit_Location;
reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getType(): org_bukkit_entity_EntityType;
/** Set this if you are more blanket blocking all types of these spawns, and wish to abort the spawn process from
 trying more attempts after this cancellation. */
setShouldAbortSpawn(shouldAbortSpawn: boolean): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getSpawnLocation(): org_bukkit_Location;
/** Cancelling this event is more effecient than cancelling CreatureSpawnEvent */
setCancelled(cancel: boolean): void;
shouldAbortSpawn(): boolean;
getReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(location: org_bukkit_Location, type: org_bukkit_entity_EntityType, reason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Collection as java_util_Collection } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty, PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Fired when the server is requesting to fill in properties of an incomplete profile, such as textures.

 Allows plugins to pre populate cached properties and avoid a call to the Mojang API */

  export class PreFillProfileEvent extends org_bukkit_event_Event {
profile: com_destroystokyo_paper_profile_PlayerProfile;
static handlers: org_bukkit_event_HandlerList;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Sets the properties on the profile, avoiding the call to the Mojang API
 Same as .getPlayerProfile().setProperties(properties); */
setProperties(properties: java_util_Collection<com_destroystokyo_paper_profile_ProfileProperty>): void;
static getHandlerList(): org_bukkit_event_HandlerList;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(profile: com_destroystokyo_paper_profile_PlayerProfile);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Set as java_util_Set, UUID as java_util_UUID } from 'java.util';
import { ProfileProperty as com_destroystokyo_paper_profile_ProfileProperty } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Allows a plugin to intercept a Profile Lookup for a Profile by name

 At the point of event fire, the UUID and properties are unset.

 If a plugin sets the UUID, and optionally the properties, the API call to look up the profile may be skipped.

 No guarantees are made about thread execution context for this event. If you need to know, check
 event.isAsync() */

  export class PreLookupProfileEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
name: string;
uuid: java_util_UUID;
properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
handlers: org_bukkit_event_HandlerList;
name: string;
static handlerList: org_bukkit_event_HandlerList;
uUID: java_util_UUID | null;
profileProperties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getName(): string;
/** Adds any properties currently missing to the prepopulated properties set, replacing any that already were set.
 Any property in this Set will be automatically prefilled on this Profile */
addProfileProperties(properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>): void;
/** Clears any existing prepopulated properties and uses the supplied properties
 Any property in this Set will be automatically prefilled on this Profile */
setProfileProperties(properties: java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>): void;
static getHandlerList(): org_bukkit_event_HandlerList;
/** If this value is left null by the completion of the event call, then the server will
 trigger a call to the Mojang API to look up the UUID (Network Request), and subsequently, fire a
 LookupProfileEvent */
getUUID(): java_util_UUID | null;
/** Sets the UUID for this player name. This will skip the initial API call to find the players UUID.

 However, if Profile Properties are needed by the server, you must also set them or else an API call might still be made. */
setUUID(uuid: java_util_UUID | null): void | null;
getProfileProperties(): java_util_Set<com_destroystokyo_paper_profile_ProfileProperty>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(name: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { PreCreatureSpawnEvent as com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent } from 'com.destroystokyo.paper.event.entity';
/** Called before an entity is spawned into a world by a spawner.

 This only includes the spawner's location and not the full BlockState snapshot for performance reasons.
 If you really need it you have to get the spawner yourself. */

  export class PreSpawnerSpawnEvent extends com_destroystokyo_paper_event_entity_PreCreatureSpawnEvent {
spawnerLocation: org_bukkit_Location;
spawnerLocation: org_bukkit_Location;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getSpawnerLocation(): org_bukkit_Location;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(location: org_bukkit_Location, type: org_bukkit_entity_EntityType, spawnerLocation: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.profile' {
import { Object as java_lang_Object } from 'java.lang';
/** Represents a property on a PlayerProfile */

  export class ProfileProperty extends java_lang_Object {
name: string;
value: string;
signature: string;
name: string;
value: string;
signature: string | null;
isSigned(): boolean;
equals(o: java_lang_Object): boolean;
hashCode(): number;
getName(): string;
getValue(): string;
getSignature(): string | null;
constructor(name: string, value: string, signature: string | null);
constructor(name: string, value: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.profile' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { PlayerProfile as com_destroystokyo_paper_profile_PlayerProfile } from 'com.destroystokyo.paper.profile';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Fires when the server needs to verify if a player is whitelisted.

 Plugins may override/control the servers whitelist with this event,
 and dynamically change the kick message. */

  export class ProfileWhitelistVerifyEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
profile: com_destroystokyo_paper_profile_PlayerProfile;
whitelistEnabled: boolean;
whitelisted: boolean;
isOp: boolean;
kickMessage: string;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
playerProfile: com_destroystokyo_paper_profile_PlayerProfile;
kickMessage: string | null;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
setKickMessage(kickMessage: string | null): void | null;
isWhitelistEnabled(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
isWhitelisted(): boolean;
isOp(): boolean;
getPlayerProfile(): com_destroystokyo_paper_profile_PlayerProfile;
/** Changes the players whitelisted state. false will deny the login */
setWhitelisted(whitelisted: boolean): void;
getKickMessage(): string | null;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(profile: com_destroystokyo_paper_profile_PlayerProfile, whitelistEnabled: boolean, whitelisted: boolean, isOp: boolean, kickMessage: string | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity, Projectile as org_bukkit_entity_Projectile } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Called when an projectile collides with an entity
 
 This event is called before EntityDamageByEntityEvent, and cancelling it will allow the projectile to continue flying */

  export class ProjectileCollideEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
collidedWith: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
collidedWith: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Projectile;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Get the entity the projectile collided with */
getCollidedWith(): org_bukkit_entity_Entity;
/** Get the projectile that collided */
getEntity(): org_bukkit_entity_Projectile;
/** Get the projectile that collided */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(what: org_bukkit_entity_Projectile, collidedWith: org_bukkit_entity_Entity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, Player as org_bukkit_entity_Player, EntityType as org_bukkit_entity_EntityType, Pose as org_bukkit_entity_Pose, Projectile as org_bukkit_entity_Projectile, Mob as org_bukkit_entity_Mob } from 'org.bukkit.entity';
import { Pathfinder as com_destroystokyo_paper_entity_Pathfinder, TargetEntityInfo as com_destroystokyo_paper_entity_TargetEntityInfo } from 'com.destroystokyo.paper.entity';
import { MemoryKey as org_bukkit_entity_memory_MemoryKey } from 'org.bukkit.entity.memory';
import { Object as java_lang_Object, Boolean as java_lang_Boolean, Class as java_lang_Class } from 'java.lang';
import { FluidCollisionMode as org_bukkit_FluidCollisionMode, Location as org_bukkit_Location, Material as org_bukkit_Material, World as org_bukkit_World, Server as org_bukkit_Server, EntityEffect as org_bukkit_EntityEffect, Chunk as org_bukkit_Chunk } from 'org.bukkit';
import { RayTraceResult as org_bukkit_util_RayTraceResult, BoundingBox as org_bukkit_util_BoundingBox, Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { EntityEquipment as org_bukkit_inventory_EntityEquipment, ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Set as java_util_Set, List as java_util_List, Collection as java_util_Collection, UUID as java_util_UUID } from 'java.util';
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace, PistonMoveReaction as org_bukkit_block_PistonMoveReaction } from 'org.bukkit.block';
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { TargetBlockInfo as com_destroystokyo_paper_block_TargetBlockInfo } from 'com.destroystokyo.paper.block';
import { PotionEffect as org_bukkit_potion_PotionEffect, PotionEffectType as org_bukkit_potion_PotionEffectType } from 'org.bukkit.potion';
import { Attribute as org_bukkit_attribute_Attribute, AttributeInstance as org_bukkit_attribute_AttributeInstance } from 'org.bukkit.attribute';
import { Spigot as org_bukkit_entity_Entity_Spigot } from 'org.bukkit.entity.Entity';
import { Spigot as org_bukkit_command_CommandSender_Spigot } from 'org.bukkit.command.CommandSender';
import { TeleportCause as org_bukkit_event_player_PlayerTeleportEvent_TeleportCause } from 'org.bukkit.event.player.PlayerTeleportEvent';
import { CompletableFuture as java_util_concurrent_CompletableFuture } from 'java.util.concurrent';
import { EntityDamageEvent as org_bukkit_event_entity_EntityDamageEvent } from 'org.bukkit.event.entity';
import { SpawnReason as org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason } from 'org.bukkit.event.entity.CreatureSpawnEvent';
import { MetadataValue as org_bukkit_metadata_MetadataValue } from 'org.bukkit.metadata';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Permission as org_bukkit_permissions_Permission, PermissionAttachment as org_bukkit_permissions_PermissionAttachment, PermissionAttachmentInfo as org_bukkit_permissions_PermissionAttachmentInfo } from 'org.bukkit.permissions';
import { PersistentDataContainer as org_bukkit_persistence_PersistentDataContainer } from 'org.bukkit.persistence';
import { LootTable as org_bukkit_loot_LootTable } from 'org.bukkit.loot';

  export class RangedEntity implements org_bukkit_entity_Mob {
target: org_bukkit_entity_LivingEntity | null;
pathfinder: com_destroystokyo_paper_entity_Pathfinder;
equipment: org_bukkit_inventory_EntityEquipment | null;
itemUseRemainingTime: number;
handRaisedTime: number;
shieldBlockingDelay: number;
targetEntity: org_bukkit_entity_Entity | null;
targetEntity: org_bukkit_entity_Entity | null;
leashHolder: org_bukkit_entity_Entity;
eyeHeight: number;
eyeHeight: number;
eyeLocation: org_bukkit_Location;
lineOfSight: java_util_List<org_bukkit_block_Block> | null;
targetBlock: org_bukkit_block_Block | null;
targetBlock: org_bukkit_block_Block | null;
targetBlock: org_bukkit_block_Block | null;
targetBlockFace: org_bukkit_block_BlockFace | null;
targetBlockFace: org_bukkit_block_BlockFace | null;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo | null;
targetBlockInfo: com_destroystokyo_paper_block_TargetBlockInfo | null;
remainingAir: number;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo | null;
targetEntityInfo: com_destroystokyo_paper_entity_TargetEntityInfo | null;
lastTwoTargetBlocks: java_util_List<org_bukkit_block_Block> | null;
targetBlockExact: org_bukkit_block_Block | null;
targetBlockExact: org_bukkit_block_Block | null;
maximumAir: number;
maximumNoDamageTicks: number;
lastDamage: number;
noDamageTicks: number;
killer: org_bukkit_entity_Player | null;
potionEffect: org_bukkit_potion_PotionEffect | null;
activePotionEffects: java_util_Collection<org_bukkit_potion_PotionEffect>;
removeWhenFarAway: boolean;
canPickupItems: boolean;
memory: T | null;
arrowsStuck: number;
activeItem: org_bukkit_inventory_ItemStack | null;
attribute: org_bukkit_attribute_AttributeInstance | null;
health: number;
maxHealth: number;
absorptionAmount: number;
location: org_bukkit_Location;
location: org_bukkit_Location;
type: org_bukkit_entity_EntityType;
origin: org_bukkit_Location | null;
vehicle: org_bukkit_entity_Entity | null;
passengers: java_util_List<org_bukkit_entity_Entity>;
world: org_bukkit_World;
width: number;
height: number;
server: org_bukkit_Server;
boundingBox: org_bukkit_util_BoundingBox;
nearbyEntities: java_util_List<org_bukkit_entity_Entity>;
pistonMoveReaction: org_bukkit_block_PistonMoveReaction;
chunk: org_bukkit_Chunk;
uniqueId: java_util_UUID;
maxFireTicks: number;
scoreboardTags: java_util_Set<string>;
pose: org_bukkit_entity_Pose;
facing: org_bukkit_block_BlockFace;
velocity: org_bukkit_util_Vector;
entityId: number;
fireTicks: number;
passenger: org_bukkit_entity_Entity | null;
fallDistance: number;
lastDamageCause: org_bukkit_event_entity_EntityDamageEvent | null;
ticksLived: number;
portalCooldown: number;
entitySpawnReason: org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
metadata: java_util_List<org_bukkit_metadata_MetadataValue>;
name: string;
effectivePermissions: java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
customName: string | null;
persistentDataContainer: org_bukkit_persistence_PersistentDataContainer;
seed: number;
lootTable: org_bukkit_loot_LootTable | null;
/** Alias to LivingEntity.isHandRaised(), if the entity is charging an attack */
isChargingAttack(): boolean;
/** Attack the specified entity using a ranged attack. */
rangedAttack(target: org_bukkit_entity_LivingEntity, charge: number): void;
/** Sets that the Entity is "charging" up an attack, by raising its hands */
setChargingAttack(raiseHands: boolean): void;
/** Gets the current target of this Mob */
getTarget(): org_bukkit_entity_LivingEntity | null;
/** Instructs this Mob to set the specified LivingEntity as its target.
 
 Hostile creatures may attack their target, and friendly creatures may
 follow their target. */
setTarget(target: org_bukkit_entity_LivingEntity | null): void | null;
/** Check if this mob is exposed to daylight */
isInDaylight(): boolean;
/** Enables access to control the pathing of an Entity */
getPathfinder(): com_destroystokyo_paper_entity_Pathfinder;
/** Sets whether this mob is aware of its surroundings.

 Unaware mobs will still move if pushed, attacked, etc. but will not move
 or perform any actions on their own. Unaware mobs may also have other
 unspecified behaviours disabled, such as drowning. */
setAware(aware: boolean): void;
/** Gets whether this mob is aware of its surroundings.

 Unaware mobs will still move if pushed, attacked, etc. but will not move
 or perform any actions on their own. Unaware mobs may also have other
 unspecified behaviours disabled, such as drowning. */
isAware(): boolean;
/** Sets the value of the memory specified.
 
 Note that the value will not be persisted when the specific entity does
 not have that value by default. */
setMemory<T extends java_lang_Object>(memoryKey: org_bukkit_entity_memory_MemoryKey<T>, memoryValue: T | null): void | null;
/** Returns whether this entity is slumbering. */
isSleeping(): boolean;
/** Performs a ray trace that provides information on the targeted block.
 
 This takes the blocks' precise collision shapes into account.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
rayTraceBlocks(maxDistance: number, fluidCollisionMode: org_bukkit_FluidCollisionMode): org_bukkit_util_RayTraceResult | null;
/** Performs a ray trace that provides information on the targeted block.
 
 This takes the blocks' precise collision shapes into account. Fluids are
 ignored.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
rayTraceBlocks(maxDistance: number): org_bukkit_util_RayTraceResult | null;
/** Makes this entity attack the given entity with a melee attack.

 Attack damage is calculated by the server from the attributes and
 equipment of this mob, and knockback is applied to target as
 appropriate. */
attack(target: org_bukkit_entity_Entity): void;
/** Gets the inventory with the equipment worn by the living entity. */
getEquipment(): org_bukkit_inventory_EntityEquipment | null;
/** Checks to see if an entity is gliding, such as using an Elytra. */
isGliding(): boolean;
/** Checks to see if an entity is swimming. */
isSwimming(): boolean;
/** Makes entity start or stop swimming.

 This may have unexpected results if the entity is not in water. */
setSwimming(swimming: boolean): void;
/** Gets if this entity is subject to collisions with other entities.
 
 Please note that this method returns only the custom collidable state,
 not whether the entity is non-collidable for other reasons such as being
 dead. */
isCollidable(): boolean;
/** Set entity jump state
 
 Setting to true will mark the entity to jump.
 
 Setting to false will unmark the entity to jump but will not stop a jump already in-progress. */
setJumping(jumping: boolean): void;
/** Checks to see if an entity is currently using the Riptide enchantment. */
isRiptiding(): boolean;
/** Checks whether the living entity has block line of sight to another.
 
 This uses the same algorithm that hostile mobs use to find the closest
 player. */
hasLineOfSight(other: org_bukkit_entity_Entity): boolean;
/** Whether or not this entity is using or charging an attack (Bow pulled back, drinking potion, eating food) */
isHandRaised(): boolean;
/** Get's remaining time a player needs to keep hands raised with an item to finish using it. */
getItemUseRemainingTime(): number;
/** Get how long the players hands have been raised (Charging Bow attack, using a potion, etc) */
getHandRaisedTime(): number;
/** Get the delay (in ticks) before blocking is effective for this entity */
getShieldBlockingDelay(): number;
/** Gets information about the entity being targeted */
getTargetEntity(maxDistance: number): org_bukkit_entity_Entity | null;
/** Gets information about the entity being targeted */
getTargetEntity(maxDistance: number, ignoreBlocks: boolean): org_bukkit_entity_Entity | null;
/** Set the delay (in ticks) before blocking is effective for this entity */
setShieldBlockingDelay(delay: number): void;
/** Sets the leash on this entity to be held by the supplied entity.
 
 This method has no effect on EnderDragons, Withers, Players, or Bats.
 Non-living entities excluding leashes will not persist as leash
 holders. */
setLeashHolder(holder: org_bukkit_entity_Entity | null): boolean | null;
/** Returns whether the entity is currently leashed. */
isLeashed(): boolean;
/** Gets the entity that is currently leading this entity. */
getLeashHolder(): org_bukkit_entity_Entity;
/** Gets the height of the living entity's eyes above its Location. */
getEyeHeight(): number;
/** Gets the height of the living entity's eyes above its Location. */
getEyeHeight(ignorePose: boolean): number;
/** Get a Location detailing the current eye position of the living entity. */
getEyeLocation(): org_bukkit_Location;
/** Gets all blocks along the living entity's line of sight.
 
 This list contains all blocks from the living entity's eye position to
 target inclusive. This method considers all blocks as 1x1x1 in size. */
getLineOfSight(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): java_util_List<org_bukkit_block_Block> | null;
/** Gets the block that the living entity has targeted.
 
 This method considers all blocks as 1x1x1 in size. To take exact block
 collision shapes into account, see getTargetBlockExact(int,
 FluidCollisionMode). */
getTargetBlock(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted */
getTargetBlock(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted, ignoring fluids */
getTargetBlock(maxDistance: number): org_bukkit_block_Block | null;
/** Gets the blockface of that block that the living entity has targeted */
getTargetBlockFace(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): org_bukkit_block_BlockFace | null;
/** Gets the blockface of that block that the living entity has targeted, ignoring fluids */
getTargetBlockFace(maxDistance: number): org_bukkit_block_BlockFace | null;
/** Gets information about the block the living entity has targeted, ignoring fluids */
getTargetBlockInfo(maxDistance: number): com_destroystokyo_paper_block_TargetBlockInfo | null;
/** Gets information about the block the living entity has targeted */
getTargetBlockInfo(maxDistance: number, fluidMode: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode): com_destroystokyo_paper_block_TargetBlockInfo | null;
/** Returns the amount of air that the living entity has remaining, in
 ticks. */
getRemainingAir(): number;
/** Gets information about the entity being targeted */
getTargetEntityInfo(maxDistance: number): com_destroystokyo_paper_entity_TargetEntityInfo | null;
/** Gets information about the entity being targeted */
getTargetEntityInfo(maxDistance: number, ignoreBlocks: boolean): com_destroystokyo_paper_entity_TargetEntityInfo | null;
/** Gets the last two blocks along the living entity's line of sight.
 
 The target block will be the last block in the list. This method
 considers all blocks as 1x1x1 in size. */
getLastTwoTargetBlocks(transparent: java_util_Set<org_bukkit_Material> | null, maxDistance: number): java_util_List<org_bukkit_block_Block> | null;
/** Gets the block that the living entity has targeted.
 
 This takes the blocks' precise collision shapes into account. Fluids are
 ignored.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
getTargetBlockExact(maxDistance: number): org_bukkit_block_Block | null;
/** Gets the block that the living entity has targeted.
 
 This takes the blocks' precise collision shapes into account.
 
 This may cause loading of chunks! Some implementations may impose
 artificial restrictions on the maximum distance. */
getTargetBlockExact(maxDistance: number, fluidCollisionMode: org_bukkit_FluidCollisionMode): org_bukkit_block_Block | null;
/** Sets the amount of air that the living entity has remaining, in ticks. */
setRemainingAir(ticks: number): void;
/** Returns the maximum amount of air the living entity can have, in ticks. */
getMaximumAir(): number;
/** Sets the maximum amount of air the living entity can have, in ticks. */
setMaximumAir(ticks: number): void;
/** Returns the living entity's current maximum no damage ticks.
 
 This is the maximum duration in which the living entity will not take
 damage. */
getMaximumNoDamageTicks(): number;
/** Sets the living entity's current maximum no damage ticks. */
setMaximumNoDamageTicks(ticks: number): void;
/** Returns the living entity's last damage taken in the current no damage
 ticks time.
 
 Only damage higher than this amount will further damage the living
 entity. */
getLastDamage(): number;
/** Sets the damage dealt within the current no damage ticks time period. */
setLastDamage(damage: number): void;
/** Returns the living entity's current no damage ticks. */
getNoDamageTicks(): number;
/** Sets the living entity's current no damage ticks. */
setNoDamageTicks(ticks: number): void;
/** Gets the player identified as the killer of the living entity.
 
 May be null. */
getKiller(): org_bukkit_entity_Player | null;
/** Sets the player identified as the killer of the living entity. */
setKiller(killer: org_bukkit_entity_Player | null): void | null;
/** Adds the given PotionEffect to the living entity.
 
 Only one potion effect can be present for a given PotionEffectType. */
addPotionEffect(effect: org_bukkit_potion_PotionEffect, force: boolean): boolean;
/** Adds the given PotionEffect to the living entity. */
addPotionEffect(effect: org_bukkit_potion_PotionEffect): boolean;
/** Attempts to add all of the given PotionEffect to the living
 entity. */
addPotionEffects(effects: java_util_Collection<org_bukkit_potion_PotionEffect>): boolean;
/** Returns whether the living entity already has an existing effect of
 the given PotionEffectType applied to it. */
hasPotionEffect(type: org_bukkit_potion_PotionEffectType): boolean;
/** Returns the active PotionEffect of the specified type.
 
 If the effect is not present on the entity then null will be returned. */
getPotionEffect(type: org_bukkit_potion_PotionEffectType): org_bukkit_potion_PotionEffect | null;
/** Removes any effects present of the given PotionEffectType. */
removePotionEffect(type: org_bukkit_potion_PotionEffectType): void;
/** Returns all currently active PotionEffects on the living
 entity. */
getActivePotionEffects(): java_util_Collection<org_bukkit_potion_PotionEffect>;
/** Returns if the living entity despawns when away from players or not.
 
 By default, animals are not removed while other mobs are. */
getRemoveWhenFarAway(): boolean;
/** Sets whether or not the living entity despawns when away from players
 or not. */
setRemoveWhenFarAway(remove: boolean): void;
/** Sets whether or not the living entity can pick up items. */
setCanPickupItems(pickup: boolean): void;
/** Gets if the living entity can pick up items. */
getCanPickupItems(): boolean;
/** Makes entity start or stop gliding. This will work even if an Elytra
 is not equipped, but will be reverted by the server immediately after
 unless an event-cancelling mechanism is put in place. */
setGliding(gliding: boolean): void;
/** Sets whether an entity will have AI.

 The entity will be completely unable to move if it has no AI. */
setAI(ai: boolean): void;
/** Checks whether an entity has AI.

 The entity will be completely unable to move if it has no AI. */
hasAI(): boolean;
/** Makes this entity swing their main hand.

 This method does nothing if this entity does not have an animation for
 swinging their main hand. */
swingMainHand(): void;
/** Makes this entity swing their off hand.

 This method does nothing if this entity does not have an animation for
 swinging their off hand. */
swingOffHand(): void;
/** Set if this entity will be subject to collisions other entities.
 
 Note that collisions are bidirectional, so this method would need to be
 set to false on both the collidee and the collidant to ensure no
 collisions take place. */
setCollidable(collidable: boolean): void;
/** Returns the value of the memory specified.
 
 Note that the value is null when the specific entity does not have that
 value by default. */
getMemory<T extends java_lang_Object>(memoryKey: org_bukkit_entity_memory_MemoryKey<T>): T | null;
/** Get the number of arrows stuck in this entity */
getArrowsStuck(): number;
/** Set the number of arrows stuck in this entity */
setArrowsStuck(arrows: number): void;
/** Get's the item being actively "used" or consumed. */
getActiveItem(): org_bukkit_inventory_ItemStack | null;
/** Get entity jump state.
 
 Jump state will be true when the entity has been marked to jump. */
isJumping(): boolean;
/** Gets the specified attribute instance from the object. This instance will
 be backed directly to the object and any changes will be visible at once. */
getAttribute(attribute: org_bukkit_attribute_Attribute): org_bukkit_attribute_AttributeInstance | null;
getHealth(): number;
getMaxHealth(): number;
damage(arg0: number, arg1: org_bukkit_entity_Entity): void;
damage(arg0: number): void;
setHealth(arg0: number): void;
getAbsorptionAmount(): number;
setAbsorptionAmount(arg0: number): void;
setMaxHealth(arg0: number): void;
resetMaxHealth(): void;
/** Returns false if the entity has died or been despawned for some other
 reason. */
isValid(): boolean;
/** Mark the entity's removal. */
remove(): void;
/** Check if a vehicle has passengers. */
isEmpty(): boolean;
getLocation(): org_bukkit_Location;
getLocation(arg0: org_bukkit_Location): org_bukkit_Location;
/** Get the type of the entity. */
getType(): org_bukkit_entity_EntityType;
/** Gets the location where this entity originates from.
 
 This value can be null if the entity hasn't yet been added to the world. */
getOrigin(): org_bukkit_Location | null;
/** Get the vehicle that this player is inside. If there is no vehicle,
 null will be returned. */
getVehicle(): org_bukkit_entity_Entity | null;
/** Gets a list of passengers of this vehicle.
 
 The returned list will not be directly linked to the entity's current
 passengers, and no guarantees are made as to its mutability. */
getPassengers(): java_util_List<org_bukkit_entity_Entity>;
/** Returns true if the entity gets persisted.
 
 By default all entities are persistent. An entity will also not get
 persisted, if it is riding an entity that is not persistent.
 
 The persistent flag on players controls whether or not to save their
 playerdata file when they quit. If a player is directly or indirectly
 riding a non-persistent entity, the vehicle at the root and all its
 passengers won't get persisted.
 
 This should not be confused with
 LivingEntity.setRemoveWhenFarAway(boolean) which controls
 despawning of living entities.  */
isPersistent(): boolean;
/** Gets the current world this entity resides in */
getWorld(): org_bukkit_World;
/** Gets the entity's width */
getWidth(): number;
/** Gets the entity's height */
getHeight(): number;
/** Gets the Server that contains this Entity */
getServer(): org_bukkit_Server;
spigot(): org_bukkit_entity_Entity_Spigot;
spigot(): org_bukkit_command_CommandSender_Spigot;
/** Gets the entity's current bounding box.
 
 The returned bounding box reflects the entity's current location and
 size. */
getBoundingBox(): org_bukkit_util_BoundingBox;
/** Performs the specified EntityEffect for this entity.
 
 This will be viewable to all players near the entity.
 
 If the effect is not applicable to this class of entity, it will not play. */
playEffect(type: org_bukkit_EntityEffect): void;
/** Returns a list of entities within a bounding box centered around this
 entity */
getNearbyEntities(x: number, y: number, z: number): java_util_List<org_bukkit_entity_Entity>;
/** Gets whether the entity is invulnerable or not. */
isInvulnerable(): boolean;
/** Returns the reaction of the entity when moved by a piston. */
getPistonMoveReaction(): org_bukkit_block_PistonMoveReaction;
/** Gets the latest chunk an entity is currently or was in. */
getChunk(): org_bukkit_Chunk;
/** Returns a unique and persistent id for this entity */
getUniqueId(): java_util_UUID;
/** Returns the entity's maximum fire ticks. */
getMaxFireTicks(): number;
/** Returns a set of tags for this entity.
 
 Entities can have no more than 1024 tags. */
getScoreboardTags(): java_util_Set<string>;
/** Add a tag to this entity.
 
 Entities can have no more than 1024 tags. */
addScoreboardTag(tag: string): boolean;
/** Removes a given tag from this entity. */
removeScoreboardTag(tag: string): boolean;
/** Gets the entity's current pose.

 Note that the pose is only updated at the end of a tick, so may be
 inconsistent with other methods. eg Player.isSneaking() being
 true does not imply the current pose will be Pose.SNEAKING */
getPose(): org_bukkit_entity_Pose;
/** Gets whether the entity is silent or not. */
isSilent(): boolean;
/** Sets whether the entity is silent or not.
 
 When an entity is silent it will not produce any sound. */
setSilent(flag: boolean): void;
/** Sets whether or not to display the mob's custom name client side. The
 name will be displayed above the mob similarly to a player.
 
 This value has no effect on players, they will always display their
 name. */
setCustomNameVisible(flag: boolean): void;
/** Add a passenger to the vehicle. */
addPassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Remove a passenger from the vehicle. */
removePassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Get the closest cardinal BlockFace direction an entity is
 currently facing.
 
 This will not return any non-cardinal directions such as
 BlockFace.UP or BlockFace.DOWN.
 
 Hanging entities will override this call and thus their behavior
 may be different. */
getFacing(): org_bukkit_block_BlockFace;
/** Sets whether the entity is invulnerable or not.
 
 When an entity is invulnerable it can only be damaged by players in
 creative mode. */
setInvulnerable(flag: boolean): void;
/** Teleports this entity to the target Entity. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(destination: org_bukkit_entity_Entity, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
/** Teleports this entity to the given location. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(location: org_bukkit_Location): boolean;
/** Teleports this entity to the given location. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(location: org_bukkit_Location, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): boolean;
/** Teleports this entity to the target Entity. If this entity is riding a
 vehicle, it will be dismounted prior to teleportation. */
teleport(destination: org_bukkit_entity_Entity): boolean;
/** Gets this entity's current velocity */
getVelocity(): org_bukkit_util_Vector;
/** Sets this entity's velocity */
setVelocity(velocity: org_bukkit_util_Vector): void;
/** Returns true if the entity is supported by a block. This value is a
 state updated by the server and is not recalculated unless the entity
 moves. */
isOnGround(): boolean;
/** Sets the entity's rotation.
 
 Note that if the entity is affected by AI, it may override this rotation. */
setRotation(yaw: number, pitch: number): void;
/** Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready. */
teleportAsync(loc: org_bukkit_Location, cause: org_bukkit_event_player_PlayerTeleportEvent_TeleportCause): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
/** Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready. */
teleportAsync(loc: org_bukkit_Location): java_util_concurrent_CompletableFuture<java_lang_Boolean>;
/** Returns a unique id for this entity */
getEntityId(): number;
/** Returns the entity's current fire ticks (ticks before the entity stops
 being on fire). */
getFireTicks(): number;
/** Sets the entity's current fire ticks (ticks before the entity stops
 being on fire). */
setFireTicks(ticks: number): void;
/** Returns true if this entity has been marked for removal. */
isDead(): boolean;
/** Sets whether or not the entity gets persisted. */
setPersistent(persistent: boolean): void;
/** Gets the primary passenger of a vehicle. For vehicles that could have
 multiple passengers, this will only return the primary passenger. */
getPassenger(): org_bukkit_entity_Entity | null;
/** Set the passenger of a vehicle. */
setPassenger(passenger: org_bukkit_entity_Entity): boolean;
/** Eject any passenger. */
eject(): boolean;
/** Returns the distance this entity has fallen */
getFallDistance(): number;
/** Sets the fall distance for this entity */
setFallDistance(distance: number): void;
/** Record the last EntityDamageEvent inflicted on this entity */
setLastDamageCause(event: org_bukkit_event_entity_EntityDamageEvent | null): void | null;
/** Retrieve the last EntityDamageEvent inflicted on this entity.
 This event may have been cancelled. */
getLastDamageCause(): org_bukkit_event_entity_EntityDamageEvent | null;
/** Gets the amount of ticks this entity has lived for.
 
 This is the equivalent to "age" in entities. */
getTicksLived(): number;
/** Sets the amount of ticks this entity has lived for.
 
 This is the equivalent to "age" in entities. May not be less than one
 tick. */
setTicksLived(value: number): void;
/** Returns whether this entity is inside a vehicle. */
isInsideVehicle(): boolean;
/** Leave the current vehicle. If the entity is currently in a vehicle (and
 is removed from it), true will be returned, otherwise false will be
 returned. */
leaveVehicle(): boolean;
/** Gets whether or not the mob's custom name is displayed client side.
 
 This value has no effect on players, they will always display their
 name. */
isCustomNameVisible(): boolean;
/** Sets whether the entity has a team colored (default: white) glow.

 nb: this refers to the 'Glowing' entity property, not whether a
 glowing potion effect is applied */
setGlowing(flag: boolean): void;
/** Gets whether the entity is glowing or not.

 nb: this refers to the 'Glowing' entity property, not whether a
 glowing potion effect is applied */
isGlowing(): boolean;
/** Returns whether gravity applies to this entity. */
hasGravity(): boolean;
/** Sets whether gravity applies to this entity. */
setGravity(gravity: boolean): void;
/** Gets the period of time (in ticks) before this entity can use a portal. */
getPortalCooldown(): number;
/** Sets the period of time (in ticks) before this entity can use a portal. */
setPortalCooldown(cooldown: number): void;
/** Returns whether this entity was spawned from a mob spawner. */
fromMobSpawner(): boolean;
getEntitySpawnReason(): org_bukkit_event_entity_CreatureSpawnEvent_SpawnReason;
/** Sets a metadata value in the implementing object's metadata store. */
setMetadata(metadataKey: string, newMetadataValue: org_bukkit_metadata_MetadataValue): void;
/** Returns a list of previously set metadata values from the implementing
 object's metadata store. */
getMetadata(metadataKey: string): java_util_List<org_bukkit_metadata_MetadataValue>;
/** Tests to see whether the implementing object contains the given
 metadata value in its metadata store. */
hasMetadata(metadataKey: string): boolean;
/** Removes the given metadata value from the implementing object's
 metadata store. */
removeMetadata(metadataKey: string, owningPlugin: org_bukkit_plugin_Plugin): void;
/** Gets the name of this command sender */
getName(): string;
/** Sends this sender a message */
sendMessage(message: string): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(component: net_md_5_bungee_api_chat_BaseComponent): void;
/** Sends the component to the sender

 If this sender does not support sending full components then
 the component will be sent as legacy text. */
sendMessage(...component: net_md_5_bungee_api_chat_BaseComponent[]): void;
/** Sends this sender a message */
sendMessage(message: string[]): void;
/** Checks if this object contains an override for the specified
 permission, by fully qualified name */
isPermissionSet(name: string): boolean;
/** Checks if this object contains an override for the specified Permission */
isPermissionSet(perm: org_bukkit_permissions_Permission): boolean;
/** Gets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned */
hasPermission(perm: org_bukkit_permissions_Permission): boolean;
/** Gets the value of the specified permission, if set.
 
 If a permission override is not set on this object, the default value
 of the permission will be returned. */
hasPermission(name: string): boolean;
/** Temporarily adds a new empty PermissionAttachment to this
 object */
addAttachment(plugin: org_bukkit_plugin_Plugin, ticks: number): org_bukkit_permissions_PermissionAttachment | null;
/** Temporarily adds a new PermissionAttachment with a single
 permission by name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean, ticks: number): org_bukkit_permissions_PermissionAttachment | null;
/** Adds a new empty PermissionAttachment to this object */
addAttachment(plugin: org_bukkit_plugin_Plugin): org_bukkit_permissions_PermissionAttachment;
/** Adds a new PermissionAttachment with a single permission by
 name and value */
addAttachment(plugin: org_bukkit_plugin_Plugin, name: string, value: boolean): org_bukkit_permissions_PermissionAttachment;
/** Removes the given PermissionAttachment from this object */
removeAttachment(attachment: org_bukkit_permissions_PermissionAttachment): void;
/** Recalculates the permissions for this object, if the attachments have
 changed values.
 
 This should very rarely need to be called from a plugin. */
recalculatePermissions(): void;
/** Gets a set containing all of the permissions currently in effect by
 this object */
getEffectivePermissions(): java_util_Set<org_bukkit_permissions_PermissionAttachmentInfo>;
/** Checks if this object is a server operator */
isOp(): boolean;
/** Sets the operator status of this object */
setOp(value: boolean): void;
/** Gets the custom name on a mob or block. If there is no name this method
 will return null.
 
 This value has no effect on players, they will always use their real
 name. */
getCustomName(): string | null;
/** Sets a custom name on a mob or block. This name will be used in death
 messages and can be sent to the client as a nameplate over the mob.
 
 Setting the name to null or an empty string will clear it.
 
 This value has no effect on players, they will always use their real
 name. */
setCustomName(name: string | null): void | null;
/** Returns a custom tag container capable of storing tags on the object.

 Note that the tags stored on this container are all stored under their
 own custom namespace therefore modifying default tags using this
 PersistentDataHolder is impossible. */
getPersistentDataContainer(): org_bukkit_persistence_PersistentDataContainer;
/** Launches a Projectile from the ProjectileSource. */
launchProjectile<T extends org_bukkit_entity_Projectile>(projectile: java_lang_Class<T>): T;
/** Launches a Projectile from the ProjectileSource with an
 initial velocity. */
launchProjectile<T extends org_bukkit_entity_Projectile>(projectile: java_lang_Class<T>, velocity: org_bukkit_util_Vector | null): T | null;
/** Set the seed used when this Loot Table generates loot. */
setSeed(seed: number): void;
/** Get the Loot Table's seed.
 
 The seed is used when generating loot. */
getSeed(): number;
/** Gets the Loot Table attached to this block or entity.
 

 If an block/entity does not have a loot table, this will return null, NOT
 an empty loot table. */
getLootTable(): org_bukkit_loot_LootTable | null;
/** Set the loot table for a container or entity.
 
 To remove a loot table use null. Do not use LootTables.EMPTY to
 clear a LootTable. */
setLootTable(table: org_bukkit_loot_LootTable | null): void | null;
/** Set the loot table and seed for a container or entity at the same time. */
setLootTable(table: org_bukkit_loot_LootTable | null, seed: number): void | null;
/** Returns whether or not this object has a Loot Table */
hasLootTable(): boolean;
/** Clears the associated Loot Table to this object */
clearLootTable(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Map as java_util_Map } from 'java.util';
import { Integer as java_lang_Integer, Object as java_lang_Object } from 'java.lang';
/** A reputation score for a player on a villager. */

  export class Reputation extends java_lang_Object {
static REPUTATION_TYPES: com_destroystokyo_paper_entity_villager_ReputationType[];
reputation: number[];
reputation: number;
/** Sets the reputation value for a specific ReputationType. */
setReputation(type: com_destroystokyo_paper_entity_villager_ReputationType, value: number): void;
/** Gets the reputation value for a specific ReputationType. */
getReputation(type: com_destroystokyo_paper_entity_villager_ReputationType): number;
constructor(reputation: java_util_Map<com_destroystokyo_paper_entity_villager_ReputationType, java_lang_Integer>);
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.villager' {
import { ReputationType as com_destroystokyo_paper_entity_villager_ReputationType } from 'com.destroystokyo.paper.entity.villager';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
/** A type of reputation gained with a Villager.
 
 All types but MAJOR_POSITIVE are shared to other villagers. */

  export class ReputationType extends java_lang_Enum<com_destroystokyo_paper_entity_villager_ReputationType> {
static MAJOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_NEGATIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MINOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static MAJOR_POSITIVE: com_destroystokyo_paper_entity_villager_ReputationType;
static TRADING: com_destroystokyo_paper_entity_villager_ReputationType;
static $VALUES: com_destroystokyo_paper_entity_villager_ReputationType[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ReputationType c : ReputationType.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_entity_villager_ReputationType[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_entity_villager_ReputationType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm' {
import { ClassLoader as java_lang_ClassLoader, Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { SafeClassDefiner as com_destroystokyo_paper_event_executor_asm_SafeClassDefiner, ClassDefiner as com_destroystokyo_paper_event_executor_asm_ClassDefiner } from 'com.destroystokyo.paper.event.executor.asm';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { GeneratedClassLoader as com_destroystokyo_paper_event_executor_asm_SafeClassDefiner_GeneratedClassLoader } from 'com.destroystokyo.paper.event.executor.asm.SafeClassDefiner';

  export class SafeClassDefiner extends java_lang_Object implements com_destroystokyo_paper_event_executor_asm_ClassDefiner {
static INSTANCE: com_destroystokyo_paper_event_executor_asm_SafeClassDefiner;
loaders: java_util_concurrent_ConcurrentMap<java_lang_ClassLoader, com_destroystokyo_paper_event_executor_asm_SafeClassDefiner_GeneratedClassLoader>;
static $assertionsDisabled: boolean;
/** Description copied from interface: ClassDefinerDefine a class */
defineClass(parentLoader: java_lang_ClassLoader, name: string, data: number[]): java_lang_Class<java_lang_Object>;
/** Returns if the defined classes can bypass access checks */
isBypassAccessChecks(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor.asm.SafeClassDefiner' {
import { Object as java_lang_Object, Class as java_lang_Class, ClassLoader as java_lang_ClassLoader } from 'java.lang';

  export class GeneratedClassLoader extends java_lang_ClassLoader {
static $assertionsDisabled: boolean;
classLoadingLock: java_lang_Object;
class: java_lang_Class<java_lang_Object>;
getClassLoadingLock(arg0: string): java_lang_Object;
hasClass(arg0: string): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { CommandSender as org_bukkit_command_CommandSender, Command as org_bukkit_command_Command } from 'org.bukkit.command';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
/** Thrown when a command throws an exception */

  export class ServerCommandException extends com_destroystokyo_paper_exception_ServerException {
command: org_bukkit_command_Command;
commandSender: org_bukkit_command_CommandSender;
arguments: string[];
commandSender: org_bukkit_command_CommandSender;
command: org_bukkit_command_Command;
arguments: string[];
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
/** Gets the command sender which executed the command request */
getCommandSender(): org_bukkit_command_CommandSender;
/** Gets the command which threw the exception */
getCommand(): org_bukkit_command_Command;
/** Gets the arguments which threw the exception for the command */
getArguments(): string[];
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable, command: org_bukkit_command_Command, commandSender: org_bukkit_command_CommandSender, arguments: string[]);
constructor(message: string, cause: java_lang_Throwable, command: org_bukkit_command_Command, commandSender: org_bukkit_command_CommandSender, arguments: string[]);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';
/** Wrapper exception for all exceptions that are thrown by the server. */

  export class ServerException extends java_lang_Exception {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable);
constructor(message: string, cause: java_lang_Throwable);
constructor(message: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';
/** Exception thrown when a server event listener throws an exception */

  export class ServerEventException extends com_destroystokyo_paper_exception_ServerPluginException {
listener: org_bukkit_event_Listener;
event: org_bukkit_event_Event;
listener: org_bukkit_event_Listener;
event: org_bukkit_event_Event;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
/** Gets the listener which threw the exception */
getListener(): org_bukkit_event_Listener;
/** Gets the event which caused the exception */
getEvent(): org_bukkit_event_Event;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin, listener: org_bukkit_event_Listener, event: org_bukkit_event_Event);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin, listener: org_bukkit_event_Listener, event: org_bukkit_event_Event);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
/** Wrapper exception for all cases to which a plugin can be immediately blamed for */

  export class ServerPluginException extends com_destroystokyo_paper_exception_ServerException {
responsiblePlugin: org_bukkit_plugin_Plugin;
responsiblePlugin: org_bukkit_plugin_Plugin;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
/** Gets the plugin which is directly responsible for the exception being thrown */
getResponsiblePlugin(): org_bukkit_plugin_Plugin;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception } from 'java.lang';
/** Wrapper exception for all exceptions that are thrown by the server. */

  export class ServerException extends java_lang_Exception {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable);
constructor(message: string, cause: java_lang_Throwable);
constructor(message: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Called whenever an exception is thrown in a recoverable section of the server. */

  export class ServerExceptionEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
exception: com_destroystokyo_paper_exception_ServerException;
handlers: org_bukkit_event_HandlerList;
exception: com_destroystokyo_paper_exception_ServerException;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Gets the wrapped exception that was thrown. */
getException(): com_destroystokyo_paper_exception_ServerException;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(exception: com_destroystokyo_paper_exception_ServerException);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
/** Thrown when the internal server throws a recoverable exception. */

  export class ServerInternalException extends com_destroystokyo_paper_exception_ServerException {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
static reportInternalException(cause: java_lang_Throwable): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable);
constructor(message: string, cause: java_lang_Throwable);
constructor(message: string);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';
/** Thrown whenever there is an exception with any enabling or disabling of plugins. */

  export class ServerPluginEnableDisableException extends com_destroystokyo_paper_exception_ServerPluginException {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerException as com_destroystokyo_paper_exception_ServerException } from 'com.destroystokyo.paper.exception';
/** Wrapper exception for all cases to which a plugin can be immediately blamed for */

  export class ServerPluginException extends com_destroystokyo_paper_exception_ServerException {
responsiblePlugin: org_bukkit_plugin_Plugin;
responsiblePlugin: org_bukkit_plugin_Plugin;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
/** Gets the plugin which is directly responsible for the exception being thrown */
getResponsiblePlugin(): org_bukkit_plugin_Plugin;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { Player as org_bukkit_entity_Player } from 'org.bukkit.entity';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Plugin as org_bukkit_plugin_Plugin } from 'org.bukkit.plugin';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';
/** Thrown when an incoming plugin message channel throws an exception */

  export class ServerPluginMessageException extends com_destroystokyo_paper_exception_ServerPluginException {
player: org_bukkit_entity_Player;
channel: string;
data: number[];
channel: string;
player: org_bukkit_entity_Player;
data: number[];
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
/** Gets the channel to which the error occurred from recieving data from */
getChannel(): string;
/** Gets the player which the plugin message causing the exception originated from */
getPlayer(): org_bukkit_entity_Player;
/** Gets the data to which the error occurred from */
getData(): number[];
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin, player: org_bukkit_entity_Player, channel: string, data: number[]);
constructor(message: string, cause: java_lang_Throwable, responsiblePlugin: org_bukkit_plugin_Plugin, player: org_bukkit_entity_Player, channel: string, data: number[]);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { BukkitTask as org_bukkit_scheduler_BukkitTask } from 'org.bukkit.scheduler';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { ServerPluginException as com_destroystokyo_paper_exception_ServerPluginException } from 'com.destroystokyo.paper.exception';
/** Thrown when a plugin's scheduler fails with an exception */

  export class ServerSchedulerException extends com_destroystokyo_paper_exception_ServerPluginException {
task: org_bukkit_scheduler_BukkitTask;
task: org_bukkit_scheduler_BukkitTask;
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
/** Gets the task which threw the exception */
getTask(): org_bukkit_scheduler_BukkitTask;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(cause: java_lang_Throwable, task: org_bukkit_scheduler_BukkitTask);
constructor(message: string, cause: java_lang_Throwable, task: org_bukkit_scheduler_BukkitTask);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.exception' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Command as org_bukkit_command_Command, CommandSender as org_bukkit_command_CommandSender } from 'org.bukkit.command';
import { ServerCommandException as com_destroystokyo_paper_exception_ServerCommandException } from 'com.destroystokyo.paper.exception';
/** Called when a tab-complete request throws an exception */

  export class ServerTabCompleteException extends com_destroystokyo_paper_exception_ServerCommandException {
cause: java_lang_Throwable;
message: string;
suppressed: java_lang_Throwable[];
localizedMessage: string;
stackTrace: java_lang_StackTraceElement[];
class: java_lang_Class<java_lang_Object>;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintWriter): void;
printStackTrace(arg0: java_io_PrintStream): void;
fillInStackTrace(): java_lang_Throwable;
getCause(): java_lang_Throwable;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
toString(): string;
getMessage(): string;
getSuppressed(): java_lang_Throwable[];
getLocalizedMessage(): string;
getStackTrace(): java_lang_StackTraceElement[];
setStackTrace(arg0: java_lang_StackTraceElement[]): void;
addSuppressed(arg0: java_lang_Throwable): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(message: string, cause: java_lang_Throwable, command: org_bukkit_command_Command, commandSender: org_bukkit_command_CommandSender, arguments: string[]);
constructor(cause: java_lang_Throwable, command: org_bukkit_command_Command, commandSender: org_bukkit_command_CommandSender, arguments: string[]);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Called when the server has finished ticking the main loop */

  export class ServerTickEndEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
tickNumber: number;
tickDuration: number;
timeEnd: number;
handlers: org_bukkit_event_HandlerList;
tickNumber: number;
tickDuration: number;
timeRemaining: number;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getTickNumber(): number;
getTickDuration(): number;
/** Amount of nanoseconds remaining before the next tick should start.

 If this value is negative, then that means the server has exceeded the tick time limit and TPS has been lost.

 Method will continously return the updated time remaining value. (return value is not static) */
getTimeRemaining(): number;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(tickNumber: number, tickDuration: number, timeRemaining: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class ServerTickStartEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
tickNumber: number;
handlers: org_bukkit_event_HandlerList;
tickNumber: number;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
getTickNumber(): number;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(tickNumber: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { SkeletonHorse as org_bukkit_entity_SkeletonHorse, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Event called when a player gets close to a skeleton horse and triggers the lightning trap */

  export class SkeletonHorseTrapEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_SkeletonHorse;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_SkeletonHorse;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(horse: org_bukkit_entity_SkeletonHorse);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {


  export class SkinParts {
raw: number;
hasJacketEnabled(): boolean;
hasLeftSleeveEnabled(): boolean;
hasRightSleeveEnabled(): boolean;
hasLeftPantsEnabled(): boolean;
hasRightPantsEnabled(): boolean;
hasHatsEnabled(): boolean;
hasCapeEnabled(): boolean;
getRaw(): number;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Fired when a Slime decides to change it's facing direction.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to change direction. */

  export class SlimeChangeDirectionEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
yaw: number;
newYaw: number;
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** Set the new chosen yaw */
setNewYaw(yaw: number): void;
/** Get the new chosen yaw */
getNewYaw(): number;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(slime: org_bukkit_entity_Slime, yaw: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Slime as org_bukkit_entity_Slime, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Slime decides to start pathfinding.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimePathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Slime;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Slime;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(slime: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Slime as org_bukkit_entity_Slime, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Slime decides to start pathfinding.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimePathfindEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Slime;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Slime;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(slime: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Slime as org_bukkit_entity_Slime, Entity as org_bukkit_entity_Entity, EntityType as org_bukkit_entity_EntityType } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimeWanderEvent as com_destroystokyo_paper_event_entity_SlimeWanderEvent } from 'com.destroystokyo.paper.event.entity';
/** Fired when a Slime decides to start jumping while swimming in water/lava.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start jumping. */

  export class SlimeSwimEvent extends com_destroystokyo_paper_event_entity_SlimeWanderEvent implements org_bukkit_event_Cancellable {
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Slime;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Slime;
/** The Slime that is pathfinding. */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(slime: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Fired when a Slime decides to start wandering.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimeWanderEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(slime: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { LivingEntity as org_bukkit_entity_LivingEntity, EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Fired when a Slime decides to change direction to target a LivingEntity.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimeTargetLivingEntityEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
target: org_bukkit_entity_LivingEntity;
target: org_bukkit_entity_LivingEntity;
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** Get the targeted entity */
getTarget(): org_bukkit_entity_LivingEntity;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(slime: org_bukkit_entity_Slime, target: org_bukkit_entity_LivingEntity);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { EntityType as org_bukkit_entity_EntityType, Slime as org_bukkit_entity_Slime } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SlimePathfindEvent as com_destroystokyo_paper_event_entity_SlimePathfindEvent } from 'com.destroystokyo.paper.event.entity';
import { Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
/** Fired when a Slime decides to start wandering.
 
 This event does not fire for the entity's actual movement. Only when it
 is choosing to start moving. */

  export class SlimeWanderEvent extends com_destroystokyo_paper_event_entity_SlimePathfindEvent implements org_bukkit_event_Cancellable {
entityType: org_bukkit_entity_EntityType;
eventName: string;
class: java_lang_Class<java_lang_Object>;
/** Gets the EntityType of the Entity involved in this event. */
getEntityType(): org_bukkit_entity_EntityType;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(slime: org_bukkit_entity_Slime);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {
import { Throwable as java_lang_Throwable, Object as java_lang_Object } from 'java.lang';

  export class SneakyThrow extends java_lang_Object {

static sneaky(exception: java_lang_Throwable): void;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.executor' {
import { Listener as org_bukkit_event_Listener, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Method as java_lang_reflect_Method } from 'java.lang.reflect';
import { MethodHandle as java_lang_invoke_MethodHandle } from 'java.lang.invoke';
import { EventExecutor as org_bukkit_plugin_EventExecutor } from 'org.bukkit.plugin';

  export class StaticMethodHandleEventExecutor extends java_lang_Object implements org_bukkit_plugin_EventExecutor {
eventClass: java_lang_Class<org_bukkit_event_Event>;
handle: java_lang_invoke_MethodHandle;
execute(listener: org_bukkit_event_Listener, event: org_bukkit_event_Event): void;
constructor(eventClass: java_lang_Class<org_bukkit_event_Event>, m: java_lang_reflect_Method);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.network' {
import { InetSocketAddress as java_net_InetSocketAddress } from 'java.net';
import { NetworkClient as com_destroystokyo_paper_network_NetworkClient } from 'com.destroystokyo.paper.network';
/** Represents a client requesting the current status from the server (e.g. from
 the server list). */

  export class StatusClient implements com_destroystokyo_paper_network_NetworkClient {
address: java_net_InetSocketAddress;
protocolVersion: number;
virtualHost: java_net_InetSocketAddress | null;
/** Returns whether the client is using an older version that doesn't
 support all of the features in PaperServerListPingEvent.

 For Vanilla, this returns true for all clients older than 1.7. */
isLegacy(): boolean;
/** Returns the socket address of the client. */
getAddress(): java_net_InetSocketAddress;
/** Returns the protocol version of the client. */
getProtocolVersion(): number;
/** Returns the virtual host the client is connected to.

 The virtual host refers to the hostname/port the client used to
 connect to the server. */
getVirtualHost(): java_net_InetSocketAddress | null;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block' {
import { Block as org_bukkit_block_Block, BlockFace as org_bukkit_block_BlockFace } from 'org.bukkit.block';
import { Object as java_lang_Object } from 'java.lang';
/** Represents information about a targeted block */

  export class TargetBlockInfo extends java_lang_Object {
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
relativeBlock: org_bukkit_block_Block;
block: org_bukkit_block_Block;
blockFace: org_bukkit_block_BlockFace;
/** Get the relative Block to the targeted block on the side it is targeted at */
getRelativeBlock(): org_bukkit_block_Block;
/** Get the block that is targeted */
getBlock(): org_bukkit_block_Block;
/** Get the targeted BlockFace */
getBlockFace(): org_bukkit_block_BlockFace;
constructor(block: org_bukkit_block_Block, blockFace: org_bukkit_block_BlockFace);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.block.TargetBlockInfo' {
import { FluidMode as com_destroystokyo_paper_block_TargetBlockInfo_FluidMode } from 'com.destroystokyo.paper.block.TargetBlockInfo';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FluidMode extends java_lang_Enum<com_destroystokyo_paper_block_TargetBlockInfo_FluidMode> {
static NEVER: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static SOURCE_ONLY: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static ALWAYS: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
static $VALUES: com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (TargetBlockInfo.FluidMode c : TargetBlockInfo.FluidMode.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_block_TargetBlockInfo_FluidMode;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity' {
import { Vector as org_bukkit_util_Vector } from 'org.bukkit.util';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object } from 'java.lang';
/** Represents information about a targeted entity */

  export class TargetEntityInfo extends java_lang_Object {
entity: org_bukkit_entity_Entity;
hitVec: org_bukkit_util_Vector;
hitVector: org_bukkit_util_Vector;
entity: org_bukkit_entity_Entity;
/** Get the position the entity is targeted at */
getHitVector(): org_bukkit_util_Vector;
/** Get the entity that is targeted */
getEntity(): org_bukkit_entity_Entity;
constructor(entity: org_bukkit_entity_Entity, hitVec: org_bukkit_util_Vector);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { EntityType as org_bukkit_entity_EntityType, Egg as org_bukkit_entity_Egg } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** Called when a thrown egg might hatch.
 
 This event fires for all thrown eggs that may hatch, players, dispensers, etc. */

  export class ThrownEggHatchEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
egg: org_bukkit_entity_Egg;
hatching: boolean;
hatchType: org_bukkit_entity_EntityType;
numHatches: number;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
numHatches: number;
hatchingType: org_bukkit_entity_EntityType;
egg: org_bukkit_entity_Egg;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Get the number of mob hatches from the egg. By default the number will
 be the number the server would've done
 
 7/8 chance of being 0
 31/256 ~= 1/8 chance to be 1
 1/256 chance to be 4
  */
getNumHatches(): number;
/** Gets whether the egg is hatching or not. Will be what the server
 would've done without interaction. */
isHatching(): boolean;
/** Get the type of the mob being hatched (EntityType.CHICKEN by default) */
getHatchingType(): org_bukkit_entity_EntityType;
/** Gets the egg involved in this event. */
getEgg(): org_bukkit_entity_Egg;
/** Sets whether the egg will hatch or not. */
setHatching(hatching: boolean): void;
/** Change the type of mob being hatched by the egg */
setHatchingType(hatchType: org_bukkit_entity_EntityType): void;
/** Change the number of mobs coming out of the hatched egg
 
 The boolean hatching will override this number. Ie. If hatching =
 false, this number will not matter */
setNumHatches(numHatches: number): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(egg: org_bukkit_entity_Egg, hatching: boolean, numHatches: number, hatchingType: org_bukkit_entity_EntityType);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper' {
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Object as java_lang_Object } from 'java.lang';
/** Represents a title to may be sent to a Player.

 A title can be sent without subtitle text. */

  export class Title extends java_lang_Object {
static DEFAULT_FADE_IN: number;
static DEFAULT_STAY: number;
static DEFAULT_FADE_OUT: number;
title: net_md_5_bungee_api_chat_BaseComponent[];
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
fadeIn: number;
stay: number;
fadeOut: number;
fadeIn: number;
stay: number;
fadeOut: number;
subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null;
title: net_md_5_bungee_api_chat_BaseComponent[];
static builder(): com_destroystokyo_paper_Title_Builder;
/** Gets the number of ticks to fade in.

 The returned value is never negative. */
getFadeIn(): number;
/** Gets the number of ticks to stay.

 The returned value is never negative. */
getStay(): number;
/** Gets the number of ticks to fade out.

 The returned value is never negative. */
getFadeOut(): number;
/** Gets the text of this title's subtitle */
getSubtitle(): net_md_5_bungee_api_chat_BaseComponent[] | null;
/** Gets the text of this title */
getTitle(): net_md_5_bungee_api_chat_BaseComponent[];
/** Create a title with the default time values.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[], subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: string, subtitle: string | null);
/** Creates a new title. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent, subtitle: net_md_5_bungee_api_chat_BaseComponent | null, fadeIn: number, stay: number, fadeOut: number);
/** Creates a new title. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[], subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null, fadeIn: number, stay: number, fadeOut: number);
/** Creates a new title.

 It is recommended to the BaseComponent constrctors. */
constructor(title: string, subtitle: string | null, fadeIn: number, stay: number, fadeOut: number);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent[]);
/** Create a title with the default time values and no subtitle.

 Times use default values. */
constructor(title: string);
/** Create a title with the default time values.

 Times use default values. */
constructor(title: net_md_5_bungee_api_chat_BaseComponent, subtitle: net_md_5_bungee_api_chat_BaseComponent | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.Title' {
import { Title as com_destroystokyo_paper_Title } from 'com.destroystokyo.paper';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Builder as com_destroystokyo_paper_Title_Builder } from 'com.destroystokyo.paper.Title';
import { Object as java_lang_Object } from 'java.lang';
/** A builder for creating titles */

  export class Builder extends java_lang_Object {
title: net_md_5_bungee_api_chat_BaseComponent[];
subtitle: net_md_5_bungee_api_chat_BaseComponent[];
fadeIn: number;
stay: number;
fadeOut: number;
/** Create a title based on the values in the builder. */
build(): com_destroystokyo_paper_Title;
/** Sets the title to the given text. */
title(title: net_md_5_bungee_api_chat_BaseComponent): com_destroystokyo_paper_Title_Builder;
/** Sets the title to the given text.

 It is recommended to the BaseComponent methods. */
title(title: string): com_destroystokyo_paper_Title_Builder;
/** Sets the title to the given text. */
title(title: net_md_5_bungee_api_chat_BaseComponent[]): com_destroystokyo_paper_Title_Builder;
/** Sets the subtitle to the given text.

 It is recommended to the BaseComponent methods. */
subtitle(subtitle: string | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the subtitle to the given text. */
subtitle(subtitle: net_md_5_bungee_api_chat_BaseComponent[] | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the subtitle to the given text. */
subtitle(subtitle: net_md_5_bungee_api_chat_BaseComponent | null): com_destroystokyo_paper_Title_Builder | null;
/** Sets the number of ticks for the title to fade in */
fadeIn(fadeIn: number): com_destroystokyo_paper_Title_Builder;
/** Sets the number of ticks for the title to stay. */
stay(stay: number): com_destroystokyo_paper_Title_Builder;
/** Sets the number of ticks for the title to fade out. */
fadeOut(fadeOut: number): com_destroystokyo_paper_Title_Builder;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Block as org_bukkit_block_Block } from 'org.bukkit.block';
import { BlockEvent as org_bukkit_event_block_BlockEvent } from 'org.bukkit.event.block';
/** Called when TNT block is about to turn into TNTPrimed
 
 Cancelling it won't turn TNT into TNTPrimed and leaves
 the TNT block as-is */

  export class TNTPrimeEvent extends org_bukkit_event_block_BlockEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
reason: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
primerEntity: org_bukkit_entity_Entity;
handlers: org_bukkit_event_HandlerList | null;
primerEntity: org_bukkit_entity_Entity | null;
static handlerList: org_bukkit_event_HandlerList | null;
reason: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList | null;
/** Gets whether spawning TNTPrimed should be cancelled or not */
isCancelled(): boolean;
/** Gets the TNT primer Entity.

 It's null if getReason() is TNTPrimeEvent.PrimeReason.REDSTONE or TNTPrimeEvent.PrimeReason.FIRE.
 It's not null if getReason() is TNTPrimeEvent.PrimeReason.ITEM or TNTPrimeEvent.PrimeReason.PROJECTILE
 It might be null if getReason() is TNTPrimeEvent.PrimeReason.EXPLOSION */
getPrimerEntity(): org_bukkit_entity_Entity | null;
static getHandlerList(): org_bukkit_event_HandlerList | null;
/** Sets whether to cancel spawning TNTPrimed or not */
setCancelled(cancel: boolean): void;
/** Gets the TNT prime reason */
getReason(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(theBlock: org_bukkit_block_Block, reason: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason, primerEntity: org_bukkit_entity_Entity | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.TNTPrimeEvent' {
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class PrimeReason extends java_lang_Enum<com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason> {
static EXPLOSION: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static FIRE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static ITEM: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static PROJECTILE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static REDSTONE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static $VALUES: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (TNTPrimeEvent.PrimeReason c : TNTPrimeEvent.PrimeReason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.block.TNTPrimeEvent' {
import { PrimeReason as com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason } from 'com.destroystokyo.paper.event.block.TNTPrimeEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class PrimeReason extends java_lang_Enum<com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason> {
static EXPLOSION: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static FIRE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static ITEM: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static PROJECTILE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static REDSTONE: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
static $VALUES: com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
class: java_lang_Class<java_lang_Object>;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (TNTPrimeEvent.PrimeReason c : TNTPrimeEvent.PrimeReason.values())
    System.out.println(c);
 */
static values(): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): com_destroystokyo_paper_event_block_TNTPrimeEvent_PrimeReason;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Turtle as org_bukkit_entity_Turtle, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Turtle decides to go home */

  export class TurtleGoHomeEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Turtle;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** The turtle going home */
getEntity(): org_bukkit_entity_Turtle;
/** The turtle going home */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(turtle: org_bukkit_entity_Turtle);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Entity as org_bukkit_entity_Entity, Turtle as org_bukkit_entity_Turtle } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Turtle lays eggs */

  export class TurtleLayEggEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
location: org_bukkit_Location;
eggCount: number;
handlers: org_bukkit_event_HandlerList;
location: org_bukkit_Location;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Turtle;
static handlerList: org_bukkit_event_HandlerList;
eggCount: number;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Get the location where the eggs are being laid */
getLocation(): org_bukkit_Location;
/** Set the number of eggs being laid */
setEggCount(eggCount: number): void;
/** The turtle laying the eggs */
getEntity(): org_bukkit_entity_Entity;
/** The turtle laying the eggs */
getEntity(): org_bukkit_entity_Turtle;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Get the number of eggs being laid */
getEggCount(): number;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(turtle: org_bukkit_entity_Turtle, location: org_bukkit_Location, eggCount: number);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { Location as org_bukkit_Location } from 'org.bukkit';
import { Turtle as org_bukkit_entity_Turtle, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a Turtle starts digging to lay eggs */

  export class TurtleStartDiggingEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
location: org_bukkit_Location;
handlers: org_bukkit_event_HandlerList;
location: org_bukkit_Location;
entity: org_bukkit_entity_Turtle;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Get the location where the turtle is digging */
getLocation(): org_bukkit_Location;
/** The turtle digging */
getEntity(): org_bukkit_entity_Turtle;
/** The turtle digging */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(turtle: org_bukkit_entity_Turtle, location: org_bukkit_Location);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.utils' {
import { Unsafe as sun_misc_Unsafe } from 'sun.misc';
import { Object as java_lang_Object } from 'java.lang';

  export class UnsafeUtils extends java_lang_Object {
static UNSAFE: sun_misc_Unsafe;
static unsafe: sun_misc_Unsafe | null;
static getUnsafe(): sun_misc_Unsafe | null;
static isUnsafeSupported(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.entity.ai' {
import { GoalKey as com_destroystokyo_paper_entity_ai_GoalKey, GoalType as com_destroystokyo_paper_entity_ai_GoalType, Goal as com_destroystokyo_paper_entity_ai_Goal } from 'com.destroystokyo.paper.entity.ai';
import { EnumSet as java_util_EnumSet } from 'java.util';
import { Bee as org_bukkit_entity_Bee, Blaze as org_bukkit_entity_Blaze, Cat as org_bukkit_entity_Cat, Dolphin as org_bukkit_entity_Dolphin, Drowned as org_bukkit_entity_Drowned, Creature as org_bukkit_entity_Creature, Enderman as org_bukkit_entity_Enderman, Fish as org_bukkit_entity_Fish, Fox as org_bukkit_entity_Fox, Ghast as org_bukkit_entity_Ghast, Guardian as org_bukkit_entity_Guardian, Illager as org_bukkit_entity_Illager, Spellcaster as org_bukkit_entity_Spellcaster, Llama as org_bukkit_entity_Llama, TraderLlama as org_bukkit_entity_TraderLlama, Monster as org_bukkit_entity_Monster, Ocelot as org_bukkit_entity_Ocelot, Panda as org_bukkit_entity_Panda, Phantom as org_bukkit_entity_Phantom, PigZombie as org_bukkit_entity_PigZombie, PolarBear as org_bukkit_entity_PolarBear, PufferFish as org_bukkit_entity_PufferFish, Rabbit as org_bukkit_entity_Rabbit, Raider as org_bukkit_entity_Raider, Ravager as org_bukkit_entity_Ravager, Shulker as org_bukkit_entity_Shulker, Silverfish as org_bukkit_entity_Silverfish, Skeleton as org_bukkit_entity_Skeleton, Slime as org_bukkit_entity_Slime, Spider as org_bukkit_entity_Spider, Squid as org_bukkit_entity_Squid, Turtle as org_bukkit_entity_Turtle, Vex as org_bukkit_entity_Vex, WanderingTrader as org_bukkit_entity_WanderingTrader, Mob as org_bukkit_entity_Mob, Vindicator as org_bukkit_entity_Vindicator, Wither as org_bukkit_entity_Wither, Wolf as org_bukkit_entity_Wolf, Zombie as org_bukkit_entity_Zombie, Animals as org_bukkit_entity_Animals, IronGolem as org_bukkit_entity_IronGolem, Tameable as org_bukkit_entity_Tameable, SkeletonHorse as org_bukkit_entity_SkeletonHorse, AbstractVillager as org_bukkit_entity_AbstractVillager, Parrot as org_bukkit_entity_Parrot, Creeper as org_bukkit_entity_Creeper, AbstractHorse as org_bukkit_entity_AbstractHorse } from 'org.bukkit.entity';
import { RangedEntity as com_destroystokyo_paper_entity_RangedEntity } from 'com.destroystokyo.paper.entity';
/** Represents a vanilla goal. Plugins should never implement this.
 Generated by VanillaPathfinderTest in paper-server */

  export class VanillaGoal<T extends org_bukkit_entity_Mob> implements com_destroystokyo_paper_entity_ai_Goal<T> {
static BEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_BECOME_ANGRY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_HURT_BY_OTHER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BEE_WANDER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Bee>;
static BLAZE_FIREBALL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Blaze>;
static TEMPT_CHANCE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CAT_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CAT_RELAX_ON_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static DOLPHIN_SWIM_TO_TREASURE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DOLPHIN_SWIM_WITH_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DOLPHIN_PLAY_WITH_ITEMS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static DROWNED_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_GOTO_BEACH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_GOTO_WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static DROWNED_SWIM_UP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Drowned>;
static DROWNED_TRIDENT_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<com_destroystokyo_paper_entity_RangedEntity>;
static ENDERMAN_PICKUP_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static ENDERMAN_PLACE_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static PLAYER_WHO_LOOKED_AT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static ENDERMAN_FREEZE_WHEN_LOOKED_AT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Enderman>;
static FISH_SWIM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fish>;
static FOX_DEFEND_TRUSTED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FACEPLANT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_EAT_BERRIES: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FLOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_FOLLOW_PARENT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_LOOK_AT_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_POUNCE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_SEARCH_FOR_ITEMS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_STROLL_THROUGH_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_SEEK_SHELTER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static FOX_STALK_PREY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fox>;
static GHAST_ATTACK_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GHAST_IDLE_MOVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GHAST_MOVE_TOWARDS_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ghast>;
static GUARDIAN_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Guardian>;
static RAIDER_OPEN_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Illager>;
static SPELLCASTER_CAST_SPELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spellcaster>;
static LLAMA_ATTACK_WOLF: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
static LLAMA_HURT_BY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
static LLAMATRADER_DEFENDED_WANDERING_TRADER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_TraderLlama>;
static LONG_DISTANCE_PATROL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static OCELOT_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ocelot>;
static OCELOT_TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ocelot>;
static PANDA_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_AVOID: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_HURT_BY_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_LIE_ON_BACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_LOOK_AT_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_ROLL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_SIT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PANDA_SNEEZE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Panda>;
static PHANTOM_ATTACK_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static PHANTOM_ATTACK_STRATEGY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Phantom>;
static ANGER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PigZombie>;
static ANGER_OTHER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PigZombie>;
static POLARBEAR_ATTACK_PLAYERS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_HURT_BY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_MELEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static POLARBEAR_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PolarBear>;
static PUFFERFISH_PUFF: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_PufferFish>;
static EAT_CARROTS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static KILLER_RABBIT_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static RABBIT_AVOID_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static RABBIT_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Rabbit>;
static RAIDER_HOLD_GROUND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_OBTAIN_BANNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_CELEBRATION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAIDER_MOVE_THROUGH_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RAVAGER_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Ravager>;
static SHULKER_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_DEFENSE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_NEAREST: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SHULKER_PEEK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Shulker>;
static SILVERFISH_HIDE_IN_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Silverfish>;
static SILVERFISH_WAKE_OTHERS: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Silverfish>;
static SKELETON_MELEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Skeleton>;
static SLIME_IDLE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_NEAREST_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_RANDOM_DIRECTION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SLIME_RANDOM_JUMP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Slime>;
static SPIDER_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spider>;
static SPIDER_NEAREST_ATTACKABLE_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Spider>;
static SQUID: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Squid>;
static SQUID_FLEE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Squid>;
static TURTLE_BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_GO_HOME: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_GOTO_WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_LAY_EGG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_RANDOM_STROLL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static TURTLE_TRAVEL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Turtle>;
static VEX_CHARGE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VEX_COPY_TARGET_OF_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VEX_RANDOM_MOVE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vex>;
static VILLAGERTRADER_WANDER_TO_POSITION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_WanderingTrader>;
static VINDICATOR_BREAK_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static VINDICATOR_JOHNNY_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vindicator>;
static VINDICATOR_MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Vindicator>;
static WITHER_DO_NOTHING: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wither>;
static WOLF_AVOID_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wolf>;
static ZOMBIE_ATTACK_TURTLE_EGG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Zombie>;
static ARROW_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<com_destroystokyo_paper_entity_RangedEntity>;
static AVOID_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static BEG: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Wolf>;
static BOW_SHOOT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static BREAK_DOOR: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static BREATH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static BREED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Animals>;
static CAT_SIT_ON_BED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static CROSSBOW_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Monster>;
static DEFEND_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_IronGolem>;
static DOOR_OPEN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static EAT_TILE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static FISH_SCHOOL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Fish>;
static FLEE_SUN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static FLOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static FOLLOW_BOAT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static FOLLOW_ENTITY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static FOLLOW_OWNER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static FOLLOW_PARENT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Animals>;
static HORSE_TRAP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_SkeletonHorse>;
static HURT_BY_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static INTERACT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static JUMP_ON_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Cat>;
static LEAP_AT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static LLAMA_FOLLOW: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Llama>;
static LOOK_AT_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static LOOK_AT_TRADING_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_AbstractVillager>;
static MELEE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static MOVE_THROUGH_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static MOVE_TOWARDS_RESTRICTION: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static MOVE_TOWARDS_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static NEAREST_ATTACKABLE_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static NEAREST_ATTACKABLE_TARGET_WITCH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static NEAREST_HEALABLE_RAIDER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static NEAREST_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static OCELOT_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static OFFER_FLOWER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_IronGolem>;
static OWNER_HURT_BY_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static OWNER_HURT_TARGET: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static PANIC: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static PERCH: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Parrot>;
static RAID: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Raider>;
static RANDOM_FLY: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_LOOKAROUND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static RANDOM_STROLL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_STROLL_LAND: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_SWIM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RANDOM_TARGET_NON_TAMED: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static REMOVE_BLOCK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static RESTRICT_SUN: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static SIT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Tameable>;
static STROLL_VILLAGE: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static SWELL: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creeper>;
static TAME: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_AbstractHorse>;
static TEMPT: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static TRADE_WITH_PLAYER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_AbstractVillager>;
static USE_ITEM: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Mob>;
static WATER: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Creature>;
static WATER_JUMP: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Dolphin>;
static ZOMBIE_ATTACK: com_destroystokyo_paper_entity_ai_GoalKey<org_bukkit_entity_Zombie>;
key: com_destroystokyo_paper_entity_ai_GoalKey<T>;
types: java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** Called each tick the goal is activated */
tick(): void;
/** A unique key that identifies this type of goal. Plugins should use their own namespace, not the minecraft
 namespace. Additionally, this key also specifies to what mobs this goal can be applied to */
getKey(): com_destroystokyo_paper_entity_ai_GoalKey<T>;
/** Called when this goal gets activated */
start(): void;
/** Called when this goal gets stopped */
stop(): void;
/** Returns a list of all applicable flags for this goal.

 This method is only called on construction. */
getTypes(): java_util_EnumSet<com_destroystokyo_paper_entity_ai_GoalType>;
/** Checks if this goal should stay active, defaults to shouldActivate() */
shouldStayActive(): boolean;
/** Checks if this goal should be activated */
shouldActivate(): boolean;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.util' {


  export class VersionFetcher {
cacheTime: number;
versionMessage: string;
/** Amount of time to cache results for in milliseconds
 
 Negative values will never cache. */
getCacheTime(): number;
/** Gets the version message to cache and show to command senders. Multiple messages can be sent using newlines (\n)
 in the string. The string will be split on these newlines and sent as individual messages.
 
 NOTE: This is run in a new thread separate from that of the command processing thread */
getVersionMessage(serverVersion: string): string;

  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.util.VersionFetcher' {
import { Object as java_lang_Object } from 'java.lang';
import { VersionFetcher as com_destroystokyo_paper_util_VersionFetcher } from 'com.destroystokyo.paper.util';

  export class DummyVersionFetcher extends java_lang_Object implements com_destroystokyo_paper_util_VersionFetcher {
cacheTime: number;
versionMessage: string;
/** Description copied from interface: VersionFetcherAmount of time to cache results for in milliseconds
 
 Negative values will never cache. */
getCacheTime(): number;
/** Description copied from interface: VersionFetcherGets the version message to cache and show to command senders. Multiple messages can be sent using newlines (\n)
 in the string. The string will be split on these newlines and sent as individual messages.
 
 NOTE: This is run in a new thread separate from that of the command processing thread */
getVersionMessage(serverVersion: string): string;
constructor();
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.server' {
import { HandlerList as org_bukkit_event_HandlerList, Event as org_bukkit_event_Event } from 'org.bukkit.event';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
/** This event is fired when whitelist is toggled */

  export class WhitelistToggleEvent extends org_bukkit_event_Event {
static handlers: org_bukkit_event_HandlerList;
enabled: boolean;
handlers: org_bukkit_event_HandlerList;
static handlerList: org_bukkit_event_HandlerList;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Gets whether whitelist is going to be enabled or not */
isEnabled(): boolean;
static getHandlerList(): org_bukkit_event_HandlerList;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(enabled: boolean);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Witch as org_bukkit_entity_Witch, Entity as org_bukkit_entity_Entity } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a witch consumes the potion in their hand to buff themselves. */

  export class WitchConsumePotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
potion: org_bukkit_inventory_ItemStack;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Witch;
entity: org_bukkit_entity_Entity;
static handlerList: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack | null;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Sets the potion to be consumed and applied to the witch. */
setPotion(potion: org_bukkit_inventory_ItemStack | null): void | null;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Witch;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
getPotion(): org_bukkit_inventory_ItemStack | null;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(witch: org_bukkit_entity_Witch, potion: org_bukkit_inventory_ItemStack | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Entity as org_bukkit_entity_Entity, Witch as org_bukkit_entity_Witch } from 'org.bukkit.entity';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';

  export class WitchReadyPotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
potion: org_bukkit_inventory_ItemStack;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Witch;
static handlerList: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack | null;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
/** Sets the potion the which is going to hold and use */
setPotion(potion: org_bukkit_inventory_ItemStack | null): void | null;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Witch;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
getPotion(): org_bukkit_inventory_ItemStack | null;
/** Fires thee event, returning the desired potion, or air of cancelled */
static process(witch: org_bukkit_entity_Witch, potion: org_bukkit_inventory_ItemStack | null): org_bukkit_inventory_ItemStack | null;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(witch: org_bukkit_entity_Witch, potion: org_bukkit_inventory_ItemStack | null);
  }
}//@ts-nocheck

declare module 'com.destroystokyo.paper.event.entity' {
import { HandlerList as org_bukkit_event_HandlerList, Cancellable as org_bukkit_event_Cancellable } from 'org.bukkit.event';
import { LivingEntity as org_bukkit_entity_LivingEntity, Entity as org_bukkit_entity_Entity, Witch as org_bukkit_entity_Witch } from 'org.bukkit.entity';
import { ItemStack as org_bukkit_inventory_ItemStack } from 'org.bukkit.inventory';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { EntityEvent as org_bukkit_event_entity_EntityEvent } from 'org.bukkit.event.entity';
/** Fired when a witch throws a potion at a player */

  export class WitchThrowPotionEvent extends org_bukkit_event_entity_EntityEvent implements org_bukkit_event_Cancellable {
target: org_bukkit_entity_LivingEntity;
potion: org_bukkit_inventory_ItemStack;
static handlers: org_bukkit_event_HandlerList;
cancelled: boolean;
handlers: org_bukkit_event_HandlerList;
target: org_bukkit_entity_LivingEntity;
entity: org_bukkit_entity_Entity;
entity: org_bukkit_entity_Witch;
static handlerList: org_bukkit_event_HandlerList;
potion: org_bukkit_inventory_ItemStack | null;
eventName: string;
class: java_lang_Class<java_lang_Object>;
getHandlers(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableGets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins */
isCancelled(): boolean;
getTarget(): org_bukkit_entity_LivingEntity;
/** Sets the potion to be thrown at a player */
setPotion(potion: org_bukkit_inventory_ItemStack | null): void | null;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Entity;
/** Description copied from class: EntityEventReturns the Entity involved in this event */
getEntity(): org_bukkit_entity_Witch;
static getHandlerList(): org_bukkit_event_HandlerList;
/** Description copied from interface: CancellableSets the cancellation state of this event. A cancelled event will not
 be executed in the server, but will still pass to other plugins. */
setCancelled(cancel: boolean): void;
getPotion(): org_bukkit_inventory_ItemStack | null;
/** Calls the event and tests if cancelled. */
callEvent(): boolean;
/** Convenience method for providing a user-friendly identifier. By
 default, it is the event's class's simple name. */
getEventName(): string;
/** Any custom event that should not by synchronized with other events must
 use the specific constructor. These are the caveats of using an
 asynchronous event:
 
 The event is never fired from inside code triggered by a
     synchronous event. Attempting to do so results in an IllegalStateException.
 However, asynchronous event handlers may fire synchronous or
     asynchronous events
 The event may be fired multiple times simultaneously and in any
     order.
 Any newly registered or unregistered handler is ignored after an
     event starts execution.
 The handlers for this event may block for any length of time.
 Some implementations may selectively declare a specific event use
     as asynchronous. This behavior should be clearly defined.
 Asynchronous calls are not calculated in the plugin timing system.
  */
isAsynchronous(): boolean;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(witch: org_bukkit_entity_Witch, target: org_bukkit_entity_LivingEntity, potion: org_bukkit_inventory_ItemStack | null);
  }
}