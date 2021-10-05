import { Component, OnInit } from '@angular/core';
import { SSVideoSource, SSPlayerConfig, SSLoopType } from '../../common/components/ss-video-player/ss-video-player.component';

@Component({
    templateUrl: 'video-player-page.html',
    styleUrls: ['./video-player-page.scss'],
})
export class VideoPlayerPageComponent implements OnInit {
    playerConfig: SSPlayerConfig = {
        loop: SSLoopType.All,
        autoplay: false,
        trackUser: true,
    };
    videoSources: SSVideoSource[] = [];
// successfully implemented video
    ngOnInit(): void {
        this.videoSources = [
            {
                title: 'PHILOSOPHY - Political_ Why Vote',
                poster: 'https://res.cloudinary.com/dyzeuqi75/image/upload/v1633445107/Adobe_Post_20211005_1643340.8694493965651562_zrerpk.png',
                // tslint:disable-next-line: max-line-length
                source: 'https://res.cloudinary.com/dyzeuqi75/video/upload/v1633444263/yt5s.com-PHILOSOPHY_-_Political__Why_Vote_esdw3n.mp4',
            },
            {
                title: 'Why Voting is Important ',
                poster: 'https://res.cloudinary.com/dyzeuqi75/image/upload/v1633445107/Adobe_Post_20211005_1643340.8694493965651562_zrerpk.png',
                source: 'https://res.cloudinary.com/dyzeuqi75/video/upload/v1633443470/yt5s.com-Voting_for_Kids___Why_Voting_is_Important_ysn462.mp4',
            },
            {
                title: 'WHY VOTE ',
                poster: 'https://res.cloudinary.com/dyzeuqi75/image/upload/v1633445107/Adobe_Post_20211005_1643340.8694493965651562_zrerpk.png',
                source: 'https://res.cloudinary.com/dyzeuqi75/video/upload/v1633443644/yt5s.com-WHY_VOTE_k6mkbi.mp4',
            },
            {
                title: 'Youth engagement in politics indifferent or just different',
                poster: 'https://res.cloudinary.com/dyzeuqi75/image/upload/v1633445107/Adobe_Post_20211005_1643340.8694493965651562_zrerpk.png',
                source: 'https://res.cloudinary.com/dyzeuqi75/video/upload/v1633443614/yt5s.com-Youth_engagement_in_politics_indifferent_or_just_different_gpkmnn.mp4',
            },
        ];
    }
}
