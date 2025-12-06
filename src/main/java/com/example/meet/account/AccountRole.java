package com.example.meet.account;

public sealed interface AccountRole permits Root, Member, None {
}

record Root() implements AccountRole {
}

record Member() implements AccountRole {
}

record None() implements AccountRole {
}
