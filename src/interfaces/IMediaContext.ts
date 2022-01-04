import { Filter } from '../filters';

/**
 * Represents the audio context for playing back sounds. This can
 * represent either an HTML or WebAudio context.
 */
interface IMediaContext
{
    /**
     * `true` if all sounds are mute
     * @type {boolean}
     */
    muted: boolean;

    /**
     * Volume to apply to all sound
     * @type {number}
     */
    volume: number;

    /**
     * The speed of all sound
     * @type {number}
     */
    speed: number;

    /**
     * Set the paused state for all sound
     * @type {boolean}
     */
    paused: boolean;

    /**
     * Collection of global filter
     * @type {Filter[]}
     */
    filters: Filter[];

    /** Toggle mute for all sounds */
    toggleMute(): boolean;

    /** Toggle pause for all sounds */
    togglePause(): boolean;

    /** Dispatches event to refresh the paused state of playing instances. */
    refreshPaused(): void;

    /** Dispatch event to refresh all instances volume, mute, etc. */
    refresh(): void;

    /** Destroy the context and don't use after this. */
    destroy(): void;

    /** Reference to the Web Audio API AudioContext element, if Web Audio is available */
    audioContext: AudioContext;
}

export type { IMediaContext };
