import { Component, inject, input } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeleteBoard } from '../../../store/boards/boards.actions';
import { Board } from '../../../types/board.interface';
import { Modal } from '../../../types/modal.class';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-delete-board',
  standalone: true,
  imports: [
    BaseModalComponent,
  ],
  template: `
    <app-base-modal heading="Delete board" classes="max-w-md">
      <p class="mb-6">Are you sure to delete <span class="font-bold">{{ board().title }}</span>?</p>

      <div class="grid">
        <button class="btn bg-red-500 text-red-50" (click)="deleteBoard()">Delete board</button>
      </div>
    </app-base-modal>
  `,
})
export class DeleteBoardComponent extends Modal {
  private store = inject(Store);

  board = input.required<Board>();
  
  deleteBoard() {
    this.store.dispatch(new DeleteBoard(this.board()));
    this.modal.close();
  }

}
