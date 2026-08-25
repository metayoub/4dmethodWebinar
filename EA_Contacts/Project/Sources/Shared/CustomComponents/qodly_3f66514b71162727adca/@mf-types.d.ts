
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/components';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/components' ? typeof import('REMOTE_ALIAS_IDENTIFIER/components') :any;