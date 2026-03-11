import { useRef, useCallback } from "react";
import { AudioPlayer } from "react-audio-play";
import { Download } from "lucide-react";
import PageLayout from "./PageLayout";
import { music } from "../data";

export default function MusicPage() {
  const playerRefs = useRef({});

  const pauseOthers = useCallback((currentKey) => {
    Object.entries(playerRefs.current).forEach(([key, player]) => {
      if (key !== currentKey && player?.pause) {
        player.pause();
      }
    });
  }, []);

  return (
    <PageLayout title="Music Production">
      <h2 className="section-title fw-bold mb-3">Music Production</h2>
      <p className="about-text mb-4">Some of my amateur music production works.</p>
      {music.map((track, i) => (
        <div key={i} className="music-item mb-4">
          <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-2">
            <span className="music-title fw-bold">{track.title}</span>
            <span className="music-note">
              {track.credits.map((c, j) => (
                <span key={j}>
                  {c.label}{c.name && <>{" "}<a href={c.url} target="_blank" rel="noreferrer">{c.name}</a></>}
                </span>
              ))}
            </span>
          </div>
          {track.youtube && (
            <div className="music-video mb-2">
              <iframe
                src={track.youtube}
                title={track.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {track.audioLead && (
            <div className="music-audio mb-1">
              <span className="music-audio-label">Guitar lead</span>
              <div className="music-player-row">
                <AudioPlayer
                  className="music-rap"
                  src={track.audioLead}
                  preload="metadata"
                  onPlay={() => pauseOthers(`lead-${i}`)}
                  ref={(el) => { if (el) playerRefs.current[`lead-${i}`] = el; }}
                />
                <a href={track.audioLead} download className="music-download" title="Download">
                  <Download size={16} />
                </a>
              </div>
            </div>
          )}
          {track.audio && (
            <div className="music-audio">
              <span className="music-audio-label">With vocals</span>
              <div className="music-player-row">
                <AudioPlayer
                  className="music-rap"
                  src={track.audio}
                  preload="metadata"
                  onPlay={() => pauseOthers(`vocal-${i}`)}
                  ref={(el) => { if (el) playerRefs.current[`vocal-${i}`] = el; }}
                />
                <a href={track.audio} download className="music-download" title="Download">
                  <Download size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </PageLayout>
  );
}
