import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _createdArchetypeInstances = 0;

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._createdArchetypeInstances += 1;
    return this._createdArchetypeInstances;
  }
}

export default Necromancer;
