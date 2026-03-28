# Lyra — Project Constitution

> This file is **law**. All schemas, rules, and architectural invariants live here.

---

## 📐 Data Schema

> ⏳ Pending Discovery Phase — schemas will be defined after Discovery Questions are answered.

### Input Shape

```json
// TBD
```

### Output Shape

```json
// TBD
```

---

## 🧭 Behavioral Rules

> TBD — awaiting user input from Discovery Phase.

---

## 🏛️ Architectural Invariants

1. All business logic is **deterministic** — no LLM-driven decision-making in `tools/`.
2. All temporary/intermediate files go to `.tmp/`.
3. SOPs in `architecture/` are updated **before** corresponding code changes.
4. `.env` holds all secrets — never hardcoded.
5. A project is only "Complete" when the payload reaches its final cloud destination.

---

## 🔧 Maintenance Log

| Date | Change | Author |
|------|--------|--------|
| 2026-03-24 | Project initialized. Awaiting Discovery. | System Pilot |
