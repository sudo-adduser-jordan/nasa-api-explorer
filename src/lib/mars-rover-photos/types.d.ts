// photos
export interface PhotoRoot {
    photos: Photo[];
}

export interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

// photo_manifest
export interface ManifestRoot {
    photo_manifest: PhotoManifest;
}

export interface PhotoManifest {
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    photos: Photo[];
}

export interface Photo {
    sol: number;
    earth_date: string;
    total_photos: number;
    cameras: string[];
}

// local
export type Params = {
    params: { slug: string };
};

export type MarsCard = {
    key: number;
    href: string;
    date: string;
    sol: number;
};
