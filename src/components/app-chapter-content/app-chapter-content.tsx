import { h, Component, Element, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

import { Book } from '../../global/interfaces';

@Component({
  tag: 'app-chapter-content',
  styleUrl: 'app-chapter-content.scss',
  shadow: true
})
export class AppChapterContent {

  @State() book: Book;

  @State() chapterContent: string[];

  @Prop() match: MatchResults;

  @Prop() history: RouterHistory;

  @Element() el: HTMLElement;

  onClickChapter(e: UIEvent) {
    const element: HTMLParagraphElement | HTMLDivElement = (e.target as HTMLParagraphElement | HTMLDivElement);
    element.classList.toggle('yellow-highlight');
  }

  onClickNextChapter() {
    this.history.push(`/chapter/${this.match.params.book}/${parseInt(this.match.params.chapter) + 1}`);
  }

  async componentDidLoad() {
      const response = await fetch('/assets/nvi.json');
      const data = await response.json();
      this.book = data.find((book) => book.abbrev === this.match.params.book);
      this.chapterContent = this.book.chapters[this.match.params.chapter];
  }

  render() {
    if (this.book) {
      return (

        <div class="container chapter-content">

          <h1 class="text-center font-weight-bold">{this.book.name}</h1>
          <h3 class="text-center">Capítulo {parseInt(this.match.params.chapter) + 1}</h3>

          <div class="row">
            <div class="col-12" onClick={ this.onClickChapter }>
              {this.chapterContent.map((text, index) => {
                return (
                  <p class="text-chapter" id={`${index + 1}`}><small>{index + 1}</small> {text}</p>
                );
              })}
            </div>
            <div class="col-12">
              <stencil-route-link url={`/chapter/${this.match.params.book}/${parseInt(this.match.params.chapter) + 1}`}>
                <button class="btn btn-link btn-lg btn-block" type="button">Ir para o capítulo {parseInt(this.match.params.chapter) + 2}</button>
              </stencil-route-link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="container chapter-content">
          <p>Carregando...</p>
        </div>
      );
    }
  }
}
