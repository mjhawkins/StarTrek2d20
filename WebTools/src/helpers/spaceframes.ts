﻿import {character, CharacterType } from '../common/character';
import {Era} from './eras';
import {Source} from './sources';
import {TalentsHelper, TalentModel} from './talents';

export enum Spaceframe {
    Akira,
    Ambassador,
    Centaur,
    Constellation,
    Constitution,
    Daedalus,
    Defiant,
    Excelsior,
    Galaxy,
    Hermes,
    Intrepid,
    Luna,
    Miranda,
    Nebula,
    NewOrleans,
    Norway,
    Nova,
    NX,
    Oberth,
    Olympic,
    Saber,
    Sovereign,
    Steamrunner,
    Sydney,

    D5,
    Raptor,
    VonTalk,
    KToch,
    TuYuQ,
    D7,
    Brel,
    PachNom,
    QoToch,
    IwChaPar,
    D12,
    KlingonCivilianTransport,
    KVort,
    ParTok,
    Toron,
    VorCha,
    NeghVar
}

export enum MissionPod {
    CommandAndControl,
    Sensors,
    Weapons
}

class SpaceframeModel {
    type: CharacterType;
    name: string;
    serviceYear: number;
    eras: Era[];
    source: Source;
    systems: number[];
    departments: number[];
    scale: number;
    attacks: string[];
    talents: TalentModel[];

    constructor(type: CharacterType, name: string, serviceYear: number, eras: Era[], source: Source, systems: number[], departments: number[], scale: number, attacks: string[], talents: TalentModel[]) {
        this.type = type;
        this.name = name;
        this.serviceYear = serviceYear;
        this.eras = eras;
        this.source = source;
        this.systems = systems;
        this.departments = departments;
        this.scale = scale;
        this.attacks = attacks;
        this.talents = talents;
    }
}

export class SpaceframeViewModel extends SpaceframeModel {
    id: Spaceframe;

    constructor(id: Spaceframe, base: SpaceframeModel) {
        super(base.type, base.name, base.serviceYear, base.eras, base.source, base.systems, base.departments, base.scale, base.attacks, base.talents);
        this.id = id;
    }
}

class MissionPodModel {
    name: string;
    description: string;
    departments: number[];
    systems: number[];
    talents: TalentModel[];

    constructor(name: string, description: string, departments: number[], systems: number[], talents: TalentModel[]) {
        this.name = name;
        this.description = description;
        this.departments = departments;
        this.systems = systems;
        this.talents = talents;
    }
}

export class MissionPodViewModel extends MissionPodModel {
    id: MissionPod;

    constructor(id: MissionPod, base: MissionPodModel) {
        super(base.name, base.description, base.departments, base.systems, base.talents);
        this.id = id;
    }
}

class Spaceframes {
    private _frames: { [id: number]: SpaceframeModel } = {
        [Spaceframe.Akira]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Akira Class",
            2368,
            [],
            Source.Core,
            [9, 9, 10, 9, 11, 11],
            [0, 0, 2, 0, 0, 1],
            5,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("Ablative Armor"),
                TalentsHelper.getTalent("Extensive Shuttlebays"),
                TalentsHelper.getTalent("Rapid-Fire Torpedo Launcher")
            ]),
        [Spaceframe.Constellation]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Constellation Class",
            2285,
            [],
            Source.Core,
            [8, 7, 9, 9, 8, 9],
            [0, 1, 1, 1, 0, 0],
            4,
            [
                "Phaser Banks",
                "Photon Torpedoes",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Improved Warp Drive"),
                TalentsHelper.getTalent("Extensive Shuttlebays")
            ]),
        [Spaceframe.Constitution]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Constitution Class",
            2243,
            [],
            Source.Core,
            [7, 7, 8, 8, 8, 8],
            [1, 0, 1, 0, 1, 0],
            4,
            [
                "Phaser Banks",
                "Photon Torpedoes",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Rugged Design"),
                TalentsHelper.getTalent("Modular Laboratories")
            ]),
        [Spaceframe.Defiant]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Defiant Class",
            2371,
            [],
            Source.Core,
            [9, 9, 10, 9, 8, 13],
            [0, 1, 2, 0, 0, 0],
            3,
            [
                "Phaser Arrays",
                "Phaser Cannons",
                "Photon Torpedoes",
                "Quantum Torpedoes",
                "Tractor Beam (Strength 2)"
            ],
            [
                TalentsHelper.getTalent("Ablative Armor"),
                TalentsHelper.getTalent("Quantum Torpedoes")
            ]),
        [Spaceframe.Excelsior]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Excelsior Class",
            2285,
            [],
            Source.Core,
            [8, 8, 9, 8, 9, 9],
            [1, 0, 0, 2, 0, 0],
            5,
            [
                "Phaser Banks",
                "Photon Torpedoes",
                "Tractor Beam (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("Improved Impulse Drive"),
                TalentsHelper.getTalent("Secondary Reactors")
            ]),
        [Spaceframe.Galaxy]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Galaxy Class",
            2359,
            [],
            Source.Core,
            [9, 10, 10, 9, 10, 10],
            [1, 0, 0, 0, 1, 1],
            6,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 5)"
            ],
            [
                TalentsHelper.getTalent("Saucer Separation"),
                TalentsHelper.getTalent("Modular Laboratories"),
                TalentsHelper.getTalent("Redundant Systems")
            ]),
        [Spaceframe.Intrepid]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Intrepid Class",
            2371,
            [],
            Source.Core,
            [10, 11, 11, 10, 8, 9],
            [0, 1, 0, 0, 2, 0],
            4,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Improved Warp Drive"),
                TalentsHelper.getTalent("Advanced Sensor Suites"),
                TalentsHelper.getTalent("Emergency Medical Hologram")
            ]),
        [Spaceframe.Miranda]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Miranda Class",
            2274,
            [],
            Source.Core,
            [8, 8, 8, 9, 8, 9],
            [1, 1, 0, 0, 1, 0],
            4,
            [
                "Phaser Banks",
                "Photon Torpedoes",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Extensive Shuttlebays")
            ]),
        [Spaceframe.Nova]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Nova Class",
            2368,
            [],
            Source.Core,
            [10, 10, 9, 10, 8, 8],
            [0, 0, 0, 1, 2, 0],
            3,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 2)"
            ],
            [
                TalentsHelper.getTalent("Advanced Sensor Suites")
            ]),
        [Spaceframe.Daedalus]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Daedalus Class",
            2140,
            [],
            Source.CommandDivision,
            [6, 6, 5, 6, 8, 5],
            [0, 0, 0, 2, 1, 0],
            3,
            [
                "Phase Cannons",
                "Spatial Torpedoes",
                "Grappler Cable (Strength 2)"
            ],
            [
                TalentsHelper.getTalent("Polarized Hull Plating"),
                TalentsHelper.getTalent("Grappler Cables"),
                TalentsHelper.getTalent("Rugged Design"),
            ]),
        [Spaceframe.NX]: new SpaceframeModel(
            CharacterType.Starfleet,
            "NX Class",
            2151,
            [],
            Source.CommandDivision,
            [6, 6, 6, 6, 7, 6],
            [0, 1, 0, 1, 1, 0],
            3,
            [
                "Phase Cannons",
                "Spatial Torpedoes",
                "Grappler Cable (Strength 2)"
            ],
            [
                TalentsHelper.getTalent("Polarized Hull Plating"),
                TalentsHelper.getTalent("Grappler Cables"),
            ]),
        [Spaceframe.Hermes]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Hermes Class",
            2242,
            [],
            Source.CommandDivision,
            [7, 6, 9, 8, 8, 6],
            [0, 2, 0, 0, 1, 0],
            4,
            [
                "Phaser Banks",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Improved Reaction Control System"),
                TalentsHelper.getTalent("Independent Phaser Supply"),
                TalentsHelper.getTalent("Rugged Design"),
            ]),
        [Spaceframe.Oberth]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Oberth Class",
            2269,
            [],
            Source.CommandDivision,
            [8, 9, 7, 9, 8, 7],
            [0, 1, 0, 0, 2, 0],
            3,
            [
                "Phaser Banks",
                "Tractor Beam (Strength 2)"
            ],
            [
                TalentsHelper.getTalent("High Resolution Sensors"),
                TalentsHelper.getTalent("Improved Warp Drive"),
            ]),
        [Spaceframe.Sydney]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Sydney Class",
            2279,
            [],
            Source.CommandDivision,
            [8, 8, 9, 9, 8, 7],
            [0, 2, 0, 1, 0, 0],
            4,
            [
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Improved Impulse Drive"),
                TalentsHelper.getTalent("Rugged Design"),
            ]),
        [Spaceframe.Centaur]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Centaur Class",
            2285,
            [],
            Source.CommandDivision,
            [8, 8, 9, 8, 8, 9],
            [0, 2, 1, 0, 0, 0],
            4,
            [
                "Phaser Banks",
                "Photon Torpedoes",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Improved Impulse Drive"),
                TalentsHelper.getTalent("Improved Warp Drive"),
            ]),
        [Spaceframe.Ambassador]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Ambassador Class",
            2335,
            [],
            Source.CommandDivision,
            [9, 9, 9, 9, 10, 9],
            [1, 1, 0, 0, 1, 0],
            5,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("High Resolution Sensors"),
                TalentsHelper.getTalent("Improved Impulse Drive"),
                TalentsHelper.getTalent("Saucer Separation"),
            ]),
        [Spaceframe.Nebula]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Nebula Class",
            2361,
            [],
            Source.CommandDivision,
            [9, 10, 10, 8, 10, 9],
            [0, 0, 0, 2, 0, 0],
            5,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("Saucer Separation"),
            ]),
        [Spaceframe.NewOrleans]: new SpaceframeModel(
            CharacterType.Starfleet,
            "New Orleans Class",
            2364,
            [],
            Source.CommandDivision,
            [9, 10, 10, 10, 8, 9],
            [0, 1, 0, 1, 1, 0],
            4,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("High Resolution Sensors"),
                TalentsHelper.getTalent("Modular Laboratories"),
            ]),
        [Spaceframe.Olympic]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Olympic Class",
            2368,
            [],
            Source.CommandDivision,
            [10, 10, 10, 9, 9, 7],
            [0, 0, 0, 0, 1, 2],
            4,
            [
                "Phaser Arrays",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Advanced Sickbay"),
                TalentsHelper.getTalent("Modular Laboratories"),
                TalentsHelper.getTalent("Dedicated Personnel (Medicine)"),
            ]),
        [Spaceframe.Steamrunner]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Steamrunner Class",
            2370,
            [],
            Source.CommandDivision,
            [10, 9, 11, 10, 9, 10],
            [0, 1, 1, 0, 1, 0],
            4,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Advanced Sensor Suites"),
                TalentsHelper.getTalent("Improved Warp Drive"),
            ]),
        [Spaceframe.Norway]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Norway Class",
            2371,
            [],
            Source.CommandDivision,
            [10, 9, 10, 10, 11, 9],
            [0, 0, 0, 1, 0, 2],
            4,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Advanced Sickbay"),
                TalentsHelper.getTalent("Emergency Medical Hologram"),
            ]),
        [Spaceframe.Saber]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Saber",
            2371,
            [],
            Source.CommandDivision,
            [10, 9, 10, 10, 8, 9],
            [0, 2, 1, 0, 0, 0],
            3,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("High-Power Tractor Beam"),
                TalentsHelper.getTalent("Improved Impulse Drive"),
            ]),
        [Spaceframe.Sovereign]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Sovereign Class",
            2371,
            [],
            Source.CommandDivision,
            [9, 11, 11, 9, 10, 10],
            [1, 0, 1, 0, 1, 0],
            6,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Quantum Torpedoes",
                "Tractor Beam (Strength 5)"
            ],
            [
                TalentsHelper.getTalent("Command Ship"),
                TalentsHelper.getTalent("Emergency Medical Hologram"),
                TalentsHelper.getTalent("Improved Warp Drive"),
                TalentsHelper.getTalent("Quantum Torpedoes"),
            ]),
        [Spaceframe.Luna]: new SpaceframeModel(
            CharacterType.Starfleet,
            "Luna Class",
            2372,
            [],
            Source.CommandDivision,
            [10, 11, 10, 11, 8, 9],
            [0, 0, 0, 1, 2, 0],
            5,
            [
                "Phaser Arrays",
                "Photon Torpedoes",
                "Tractor Beam (Strength 5)"
            ],
            [
                TalentsHelper.getTalent("Advanced Research Facilities"),
                TalentsHelper.getTalent("Advanced Sensor Suites"),
                TalentsHelper.getTalent("Emergency Medical Hologram"),
            ]),

        // Klingon Spaceframes
        [Spaceframe.D5]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "D5-Class Battle Cruiser",
            2146,
            [Era.Enterprise],
            Source.KlingonCore,
            [6, 7, 7, 6, 7, 8],
            [1, 0, 1, 1, 0, 0],
            2,
            [
                "Disruptor Cannons",
                "Photon Torpedoes"
            ],
            [
                TalentsHelper.getTalent("Improved Hull Integrity"),
                TalentsHelper.getTalent("Improved Warp Drive")
            ]),
        [Spaceframe.Raptor]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Raptor-class Scout",
            2146,
            [Era.Enterprise],
            Source.KlingonCore,
            [6, 6, 7, 7, 7, 6],
            [0, 1, 1, 0, 1, 0],
            2,
            [
                "Disruptor Cannons",
                "Photon Torpedoes"
            ],
            [
                TalentsHelper.getTalent("Ablative Armor"),
                TalentsHelper.getTalent("Improved Reaction Control System")
            ]),
        [Spaceframe.VonTalk]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Vo'n'Talk",
            2149,
            [Era.Enterprise],
            Source.KlingonCore,
            [6, 6, 8, 7, 6, 7],
            [0, 1, 1, 1, 0, 0],
            3,
            [
                "Disruptor Cannons",
                "Photon Torpedoes",
                "Tractor Beam (Strength 2)"
            ],
            [
                TalentsHelper.getTalent("Improved Reaction Control System"),
                TalentsHelper.getTalent("Redundant Systems"),
            ]),
        [Spaceframe.KToch]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "K'Toch Scout",
            2128,
            [Era.Enterprise, Era.OriginalSeries],
            Source.KlingonCore,
            [6, 6, 5, 7, 5, 7],
            [0, 1, 0, 1, 1, 0],
            2,
            [
                "Disruptor Cannons"
            ],
            [
                TalentsHelper.getTalent("Rugged Design")
            ]),
        [Spaceframe.TuYuQ]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Tu'YuQ Exploratory Ship",
            2176,
            [Era.Enterprise, Era.OriginalSeries],
            Source.KlingonCore,
            [7, 8, 7, 7, 5, 7],
            [0, 0, 1, 0, 1, 1],
            3,
            [
                "Disruptor Cannons",
                "Photon Torpedoes",
                "Tractor Bean (Strength 2)"
            ],
            [
                TalentsHelper.getTalent("High Resolution Sensors"),
                TalentsHelper.getTalent("Improved Power Systems")
            ]),
        [Spaceframe.D7]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "D7-Class Battle Cruiser",
            2250,
            [Era.OriginalSeries, Era.NextGeneration],
            Source.KlingonCore,
            [7, 7, 8, 7, 8, 9],
            [0, 1, 2, 0, 0, 0],
            4,
            [
                "Disruptor Cannons",
                "Phaser Banks",
                "Photon Torpedoes",
                "Tractor Bean (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Cloaking Device"),
                TalentsHelper.getTalent("Rugged Design")
            ]),
        [Spaceframe.Brel]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "B'rel-Class Bird-of-Prey",
            2280,
            [Era.OriginalSeries, Era.NextGeneration],
            Source.KlingonCore,
            [8, 7, 9, 7, 7, 9],
            [0, 2, 1, 0, 0, 0],
            3,
            [
                "Disruptor Cannons",
                "Photon Torpedoes",
                "Tractor Bean (Strength 2)"
            ],
            [
                TalentsHelper.getTalent("Cloaking Device"),
                TalentsHelper.getTalent("Fast Targeting Systems")
            ]),
        [Spaceframe.PachNom]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Pach'Nom Multirole Escort",
            2297,
            [Era.OriginalSeries, Era.NextGeneration],
            Source.KlingonCore,
            [8, 7, 8, 8, 10, 8],
            [0, 0, 1, 1, 0, 1],
            3,
            [
                "Disruptor Cannons",
                "Photon Torpedoes",
                "Tractor Bean (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("Advanced Medical Ward"),
                TalentsHelper.getTalent("Extensive Shuttlebays"),
                TalentsHelper.getTalent("Redundant Systems")
            ]),
        [Spaceframe.QoToch]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Qo'Toch Heavy Freighter",
            2298,
            [Era.OriginalSeries, Era.NextGeneration],
            Source.KlingonCore,
            [7, 7, 6, 8, 6, 8],
            [0, 1, 1, 1, 0, 0],
            2,
            [
                "Disruptor Cannons"
            ],
            [
                TalentsHelper.getTalent("Improved Hull Integrity")
            ]),
        [Spaceframe.IwChaPar]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Iw'Cha'Par Heavy Explorer",
            2295,
            [Era.OriginalSeries, Era.NextGeneration],
            Source.KlingonCore,
            [9, 9, 7, 8, 7, 8],
            [0, 0, 2, 0, 1, 0],
            4,
            [
                "Disruptor Cannons",
                "Photon Torpedoes",
                "Tractor Bean (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("High Resolution Sensors"),
                TalentsHelper.getTalent("Rapid-Fire Torpedo Launcher")
            ]),
        [Spaceframe.D12]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "D12-Class Bird-of-Prey",
            2315,
            [Era.NextGeneration],
            Source.KlingonCore,
            [9, 7, 9, 7, 8, 10],
            [0, 1, 2, 0, 0, 0],
            4,
            [
                "Disruptor Cannons",
                "Disruptor Banks",
                "Photon Torpedoes",
                "Tractor Bean (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Backup EPS Conduits"),
                TalentsHelper.getTalent("Cloaking Device"),
                TalentsHelper.getTalent("Rugged Design")
            ]),
        [Spaceframe.KlingonCivilianTransport]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Klingon Civilian Transport",
            2352,
            [Era.NextGeneration],
            Source.KlingonCore,
            [7, 8, 9, 8, 9, 8],
            [0, 1, 1, 0, 0, 1],
            4,
            [
                "Disruptor Banks",
                "Tractor Bean (Strength 3)"
            ],
            [
                TalentsHelper.getTalent("Redundant Systems"),
                TalentsHelper.getTalent("Rugged Design")
            ]),
        [Spaceframe.KVort]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "K'Vort-Class Bird-of-Prey",
            2349,
            [Era.NextGeneration],
            Source.KlingonCore,
            [9, 8, 11, 8, 9, 11],
            [0, 2, 1, 0, 0, 0],
            4,
            [
                "Disruptor Banks",
                "Disruptor Array",
                "Photon Torpedoes",
                "Tractor Bean (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("Cloaking Device"),
                TalentsHelper.getTalent("Improved Impulse Drive"),
                TalentsHelper.getTalent("Improved Reaction Control System")
            ]),
        [Spaceframe.ParTok]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Par'Tok Transport",
            2356,
            [Era.NextGeneration],
            Source.KlingonCore,
            [9, 7, 10, 8, 8, 7],
            [0, 1, 0, 2, 0, 0],
            5,
            [
                "Disruptor Banks",
                "Tractor Bean (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("Extensive Shuttlebays"),
                TalentsHelper.getTalent("Secondary Reactors")
            ]),
        [Spaceframe.Toron]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Toron-Class Shuttlepod",
            2357,
            [Era.NextGeneration],
            Source.KlingonCore,
            [5, 5, 7, 5, 5, 7],
            [0, 2, 1, 1, 0, 0],
            4,
            [
                "Disruptor Array",
                "Photon Torpedo"
            ],
            [
                TalentsHelper.getTalent("Improved Reaction Control System")
            ]),
        [Spaceframe.VorCha]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Vor'Cha-Class Attack Cruiser",
            2367,
            [Era.NextGeneration],
            Source.KlingonCore,
            [9, 9, 10, 9, 10, 10],
            [1, 0, 2, 0, 0, 0],
            6,
            [
                "Disruptor Cannons",
                "Disruptor Banks",
                "Photon Torpedoes",
                "Tractor Bean (Strength 4)"
            ],
            [
                TalentsHelper.getTalent("Cloaking Device"),
                TalentsHelper.getTalent("Command Ship"),
                TalentsHelper.getTalent("Improved Hull Integrity")
            ]),
        [Spaceframe.NeghVar]: new SpaceframeModel(
            CharacterType.KlingonWarrior,
            "Negh'Var-Class Warship",
            2372,
            [Era.NextGeneration],
            Source.KlingonCore,
            [8, 10, 9, 8, 10, 12],
            [1, 0, 1, 1, 0, 0],
            6,
            [
                "Disruptor Cannons",
                "Disruptor Array",
                "Photon Torpedoes",
                "Tractor Bean (Strength 5)"
            ],
            [
                TalentsHelper.getTalent("Cloaking Device"),
                TalentsHelper.getTalent("Extensive Shuttlebays"),
                TalentsHelper.getTalent("Fast Targeting Systems"),
                TalentsHelper.getTalent("Secondary Reactors")
            ]),
                                                                    
        //[Spaceframe.]: new SpaceframeModel(
        //    CharacterType.Starfleet,
        //    "",
        //    0,
        //    [],
        //    Source.Core,
        //    [],
        //    [],
        //    0,
        //    [
        //    ],
        //    [
        //    ]),
    };

    private _missionPods: { [id: number]: MissionPodModel } = {
        [MissionPod.CommandAndControl]: new MissionPodModel(
            "Command & Control",
            "The pod contains additional subspace antennae and supplementary computer cores, allowing it to serve as a command vessel for fleet actions.",
            [1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0],
            [
                TalentsHelper.getTalent("Command Ship"),
                TalentsHelper.getTalent("Electronic Warfare Systems")
            ]),
        [MissionPod.Sensors]: new MissionPodModel(
            "Sensors",
            "The pod contains additional sensor systems, allowing the ship to serve a range of scientific and reconnaissance roles.",
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 2, 0, 0],
            [
                TalentsHelper.getTalent("Advanced Sensor Suites"),
                TalentsHelper.getTalent("High Resolution Sensors")
            ]),
        [MissionPod.Weapons]: new MissionPodModel(
            "Weapons",
            "The pod contains additional torpedo launchers, phaser arrays, and targeting sensors.",
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 1],
            [
                TalentsHelper.getTalent("Fast Targeting Systems"),
                TalentsHelper.getTalent("Rapid-Fire Torpedo Launcher")
            ]),
    };

    getSpaceframes(year: number, type: CharacterType) {
        let frames: SpaceframeViewModel[] = [];
        let n = 0;

        for (var frame in this._frames) {
            let f = this._frames[frame];
            if (f.serviceYear <= year) {
                if (n === Spaceframe.Constitution && year >= 2290 ||
                    !character.hasSource(f.source) || type !== f.type) {
                    n++
                    continue;
                }
                frames.push(new SpaceframeViewModel(n, f));
            }

            n++;
        }

        return frames;
    }

    getSpaceframe(frame: Spaceframe) {
        return this._frames[frame];
    }

    getMissionPods() {
        let missionPods: MissionPodViewModel[] = [];
        let n = 0;

        for (var pod in this._missionPods) {
            let p = this._missionPods[pod];
            missionPods.push(new MissionPodViewModel(n, p));
            n++;
        }

        return missionPods;
    }

    getMissionPod(pod: MissionPod) {
        if (pod === null) {
            return null;
        }

        return this._missionPods[pod];
    }
}

export const SpaceframeHelper = new Spaceframes();