import { test, expect, describe } from '@jest/globals'
import { toCamelCase } from '../../src/common/camelCaseUtil';

describe('testing Camel Case Utility', () => {
    test('simple Camel Case conversion', () => {
        expect(toCamelCase("A Fair Maiden")).toBe("aFairMaiden");
    });

    test('unusual characters', () => {
        expect(toCamelCase("Transporters & Replicators")).toBe("transportersReplicators");
        expect(toCamelCase("Cautious: Command")).toBe("cautiousCommand");
        expect(toCamelCase("Doctor's Orders")).toBe("doctorsOrders");
    });

    test('unusual characters without spaces', () => {
        expect(toCamelCase("Mind-Meld")).toBe("mindMeld");
        expect(toCamelCase("Fly-By")).toBe("flyBy");
    });

    test('names needing capitalization', () => {
        expect(toCamelCase("Faulty capitalization")).toBe("faultyCapitalization");
    });

    test('names including acronyms', () => {
        expect(toCamelCase("EVA Suits")).toBe("evaSuits");
    });

    test('preserves numbers', () => {
        expect(toCamelCase("Telepathy2e")).toBe("telepathy2e");
    });

    test('handle brackets', () => {
        expect(toCamelCase("Engineering/Science Affinity (Unofficial)")).toBe("engineeringScienceAffinityUnofficial");
    });


});