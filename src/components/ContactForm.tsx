import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = "https://formsubmit.co/ajax/ayush.kesharwani.work@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim().slice(0, 100),
          email: form.email.trim().slice(0, 255),
          phone: form.phone.trim().slice(0, 30),
          message: form.message.trim().slice(0, 2000),
          _subject: `Portfolio message from ${form.name.trim().slice(0, 100)}`,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-ink-foreground/15 bg-ink-foreground/[0.06] px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-muted/70 focus:border-primary focus:outline-none";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.04] p-6 sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink-muted">
          Name
          <input
            required
            maxLength={100}
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={field}
          />
        </label>
        <label className="block text-sm font-medium text-ink-muted">
          Email
          <input
            required
            type="email"
            maxLength={255}
            value={form.email}
            onChange={set("email")}
            placeholder="Your email"
            className={field}
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink-muted">
        Phone
        <input
          maxLength={30}
          value={form.phone}
          onChange={set("phone")}
          placeholder="9876543210"
          className={field}
        />
      </label>
      <label className="mt-4 block text-sm font-medium text-ink-muted">
        Message
        <textarea
          required
          rows={5}
          maxLength={2000}
          value={form.message}
          onChange={set("message")}
          placeholder="Hey there, I am interested in your work. Can we schedule a call?"
          className={field}
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="mt-3 text-sm text-primary">Thanks! Your message is on its way.</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-destructive">
          Couldn&apos;t send right now — please email me directly.
        </p>
      )}
    </form>
  );
}
