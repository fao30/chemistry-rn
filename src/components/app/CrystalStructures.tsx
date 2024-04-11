import { crystalImages } from '../../assets/images';
import type { CrystalStructure } from '../../types';

export const CRYSTAL_STRUCTURES: Record<CrystalStructure, { source: any; value: CrystalStructure }> = {
  SIMPLE_HEXAGONAL: { source: crystalImages.SIMPLE_HEXAGONAL, value: 'SIMPLE_HEXAGONAL' },
  FACE_CENTERED_CUBIC: { source: crystalImages.FACE_CENTERED_CUBIC, value: 'FACE_CENTERED_CUBIC' },
  BODY_CENTERED_CUBIC: { source: crystalImages.BODY_CENTERED_CUBIC, value: 'BODY_CENTERED_CUBIC' },
  SIMPLE_TRIGONAL: { source: crystalImages.SIMPLE_TRIGONAL, value: 'SIMPLE_TRIGONAL' },
  BASE_CENTERED_MONOCLINIC: { source: crystalImages.BASE_CENTERED_MONOCLINIC, value: 'BASE_CENTERED_MONOCLINIC' },
  TETRAHEDRAL_PACKING: { source: crystalImages.TETRAHEDRAL_PACKING, value: 'TETRAHEDRAL_PACKING' },
  SIMPLE_TRICLINIC: { source: crystalImages.SIMPLE_TRICLINIC, value: 'SIMPLE_TRICLINIC' },
  FACE_CENTERED_ORTHORHOMBIC: { source: crystalImages.FACE_CENTERED_ORTHORHOMBIC, value: 'FACE_CENTERED_ORTHORHOMBIC' },
  BASE_CENTERED_ORTHORHOMBIC: { source: crystalImages.BASE_CENTERED_ORTHORHOMBIC, value: 'BASE_CENTERED_ORTHORHOMBIC' },
  SIMPLE_MONOCLINIC: { source: crystalImages.SIMPLE_MONOCLINIC, value: 'SIMPLE_MONOCLINIC' },
  CENTERED_TETRAGONAL: { source: crystalImages.CENTERED_TETRAGONAL, value: 'CENTERED_TETRAGONAL' },
  SIMPLE_CUBIC: { source: crystalImages.SIMPLE_CUBIC, value: 'SIMPLE_CUBIC' },
  SIMPLE_ORTHORHOMBIC: { source: crystalImages.SIMPLE_ORTHORHOMBIC, value: 'SIMPLE_ORTHORHOMBIC' },
};
