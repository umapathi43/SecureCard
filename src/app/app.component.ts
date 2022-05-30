import {
  Component,
  ViewContainerRef,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
} from "@angular/core";
import { Subscription } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import {
  ShortcutInput,
  ShortcutEventOutput,
  KeyboardShortcutsComponent,
  AllowIn,
} from "ng-keyboard-shortcuts";
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  shortcuts: ShortcutInput[] = [];
  @ViewChild("input") input: ElementRef;
  subscription: Subscription;

  constructor(private router: Router, public location: Location) {}

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo(0, 0));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngAfterViewInit(): void {
    this.shortcuts.push(
      {
        key: ["cmd + g"],
        label: "Help",
        description: "Command + G",
        command: (e) => console.log("question mark clicked", { e }),
        preventDefault: true,
      },
      {
        key: "?",
        label: "Help",
        description: "Question mark",
        command: (e) => console.log("question mark clicked", { e }),
        preventDefault: true,
      },
      {
        key: ["ctrl  + esc"],
        label: "Help",
        description: "ctrl  + b",
        command: (e) => this.location.back(),
        preventDefault: true,
      },
      {
        key: ["ctrl  + a"],
        command: (output: ShortcutEventOutput) =>
          console.log("command + a", output),
      },
      {
        key: "shift + esc",
        preventDefault: true,
        command: (output: ShortcutEventOutput) => this.location.back(),
      },
      {
        key: "alt  + o",
        preventDefault: true,
        command: (output: ShortcutEventOutput) =>
          this.router.navigate(["/purchase-order/purchase-order-details"]),
      },
      {
        key: "alt  + c",
        preventDefault: true,
        command: (output: ShortcutEventOutput) =>
          this.router.navigate(["/counter-sale/counter-sale-details"]),
      },
      {
        key: "alt  + shift + c",
        preventDefault: true,
        command: (output: ShortcutEventOutput) =>
          this.router.navigate(["/cash-withdraw"]),
      },
      {
        key: "ctrl + plus",
        preventDefault: true,
        command: (output: ShortcutEventOutput) =>
          console.log("control + plus key", output),
      },
      {
        key: "ctrl + t",
        preventDefault: true,
        allowIn: [AllowIn.Textarea, AllowIn.Input],
        command: (e) => console.log("clicked ", e.key),
      },
      {
        key: ["? a"],
        label: "Sequences",
        description: "Sequence ? and a",
        command: (output: ShortcutEventOutput) => console.log("? a", output),
        preventDefault: true,
      },
      {
        key: "alt  + s",
        command: (output: ShortcutEventOutput) =>
          this.router.navigate(["/sales-order/sales-order-details"]),
        preventDefault: true,
        throttleTime: 50,
        // target: this.input.nativeElement,
      },
      {
        key: ["ctrl  + =", "ctrl  + z"],
        command: (output: ShortcutEventOutput) => console.log(output),
        preventDefault: true,
      },
      {
        key: "alt  + p",
        command: (output: ShortcutEventOutput) =>
          this.router.navigate(["/purchase-entry/purchase-entry-details"]),
        preventDefault: true,
      }
    );

    this.keyboard.select("ctrl + f").subscribe((e) => console.log(e));
  }
  @ViewChild(KeyboardShortcutsComponent)
  private keyboard: KeyboardShortcutsComponent;

  @HostListener('keydown', ['$event']) onKeyDown(e:any) {
    if ((e.which == 13 || e.keyCode == 13)) {
        e.preventDefault();
        let control:any;
        control = e.srcElement.nextElementSibling;
        while (true){
            if (control) {
              if ((!control.hidden) &&
                 (control.nodeName == 'INPUT' ||
                  control.nodeName == 'SELECT' ||
                  control.nodeName == 'BUTTON' ||
                  control.nodeName == 'TEXTAREA'))
                 {
                        control.focus();
                        return;
                    }else{
                        control = control.nextElementSibling;
                    }
            }
            else {
                console.log('close keyboard');
                return;
            }
        }
      }
    }
}
