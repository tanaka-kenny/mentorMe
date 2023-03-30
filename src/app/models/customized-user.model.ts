import { User } from '@angular/fire/auth';
import { Timestamp } from '@angular/fire/firestore';

export interface CustomizedUser extends User {
    name: string;
    surname: string;
    dateOfBirth: Timestamp;
    idPhotoFront: string;
    idPhotoBack: string;
    selfie: string;
    fieldsToMentor: AreaOfLearning[];
    fieldsToLearn: AreaOfLearning[];
    verificationStatus: VerificationStatus;
  }

export enum AreaOfLearning {
    softwareDevelopment = 'Software Development',
    businessIntelligence = 'Business Intelligence',
    dataAnalyst = 'Data Analyst',
    designer = 'Designer',
    qualityEngineer = 'Quality Engineer'
}

export interface VerificationStatus {
    uploadedFrontOfId: boolean;
    uploadedBackOfId: boolean;
    uploadedSelfie: boolean;
    otpVerified: boolean;
}

