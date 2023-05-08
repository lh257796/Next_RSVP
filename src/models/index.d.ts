import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAttendee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly emai?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttendee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly emai?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attendee = LazyLoading extends LazyLoadingDisabled ? EagerAttendee : LazyAttendee

export declare const Attendee: (new (init: ModelInit<Attendee>) => Attendee) & {
  copyOf(source: Attendee, mutator: (draft: MutableModel<Attendee>) => MutableModel<Attendee> | void): Attendee;
}